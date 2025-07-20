var typed = new Typed(".text", {
  strings: [
    "MERN Stack Developer.",
    "Full Stack Developer.",
    "UI/UX Designer.",
    "AI Enthusiast.",
  ],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 1000,
  loop: true,
});

// Contact Form Email Logic
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form data
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const subject = document.getElementById("subject").value;
      const message = document.getElementById("message").value;

      // Create email body
      const emailBody = `
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message:
        ${message}

This message was sent from your portfolio website.
            `;

      // Method 1: Using EmailJS (Recommended)
      sendEmailWithEmailJS(name, email, subject, message);
    });
  }
});

// Method 1: EmailJS Integration (Most Reliable way )
function sendEmailWithEmailJS(name, email, subject, message) {

  // Initialize EmailJS with your public key
  emailjs.init("AkEOg8RPq_gIHYFxZ"); // Replace with your EmailJS public key

  const templateParams = {
    from_name: name,
    from_email: email,
    subject: subject,
    message: message,
    to_email: "lakshyasaxena49@gmail.com",
  };

  emailjs.send("service_ef95wx3", "template_nombuwh", templateParams).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
      alert("Message sent successfully! I'll get back to you soon.");
      document.getElementById("contactForm").reset();
    },
    function (error) {
      console.log("FAILED...", error);
      alert("Failed to send message. Please try again or contact me directly.");
    }
  );
}
