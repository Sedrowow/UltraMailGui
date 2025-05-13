// public/js/main.ts

document.addEventListener("DOMContentLoaded", () => {
    const mailList = document.getElementById("mail-list");
    const mailView = document.getElementById("mail-view");

    if (!mailList || !mailView) {
        console.error("Required elements not found");
        return;
    }

    // Function to fetch and display mails
    const fetchMails = async () => {
        try {
            const response = await fetch("/api/mails");
            const mails = await response.json();
            mailList.innerHTML = mails.map(mail => `<li><a href="#" data-id="${mail.id}">${mail.subject}</a></li>`).join("");
        } catch (error) {
            console.error("Error fetching mails:", error);
        }
    };

    // Function to view a specific mail
    const viewMail = async (id) => {
        try {
            const response = await fetch(`/api/mails/${id}`);
            const mail = await response.json();
            mailView.innerHTML = `<h2>${mail.subject}</h2><p>${mail.body}</p>`;
        } catch (error) {
            console.error("Error fetching mail:", error);
        }
    };

    // Event listener for mail list clicks
    mailList.addEventListener("click", (event) => {
        const target = event.target as HTMLElement;
        if (target && target.tagName === "A") {
            const mailId = target.getAttribute("data-id");
            if (mailId) viewMail(mailId);
        }
    });

    // Initial fetch of mails
    fetchMails();
});