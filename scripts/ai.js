const chatWindow = document.getElementById("chat-window");
const userInput = document.getElementById("user-input");

function appendMessage(sender, message) {
  const msg = document.createElement("div");
  msg.className = `message ${sender}`;
  msg.innerText = message;
  chatWindow.appendChild(msg);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

function sendMessage() {
  const input = userInput.value.trim();
  if (input === "") return;

  appendMessage("user", input);
  userInput.value = "";

  // Basic response logic (you can replace this with real AI later)
  setTimeout(() => {
    let response = "I'm still learning! But soon, I'll be as smart as GPT!";
    
    if (input.toLowerCase().includes("who are you")) {
      response = "I'm Andrew — your AI companion from Zodex Browser!";
    } else if (input.toLowerCase().includes("hello") || input.toLowerCase().includes("hi")) {
      response = "Hey! I'm here. Ask me anything.";
    } else if (input.toLowerCase().includes("what is zodex")) {
      response = "Zodex is your ultimate private browser powered by Zodex Engine and Andrew AI!";
    }

    appendMessage("andrew", response);
  }, 600);
}
