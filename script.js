let name = '';
const todos = [];

function getReply(command) {
  command = command.toLowerCase();

  if (command.startsWith("hello my name is")) {
    const newName = command.replace("hello my name is", "").trim();
    if (name) return `You have already set your name to ${name}`;
    name = newName;
    return `Nice to meet you ${name}`;
  }

  // Hỏi tên
  if (command === "what is my name?") {
    return name ? `Your name is ${name}` : "You haven't told me your name yet";
  }

  // Thêm công việc
  if (command.startsWith("add") && command.includes("to my todo")) {
    const todoItem = command.replace("add", "").replace("to my todo", "").trim();
    todos.push(todoItem);
    return `${todoItem} added to your todo`;
  }

  // Xóa công việc
  if (command.startsWith("remove") && command.includes("from my todo")) {
    const todoItem = command.replace("remove", "").replace("from my todo", "").trim();
    const index = todos.indexOf(todoItem);
    if (index !== -1) {
      todos.splice(index, 1);
      return `Removed ${todoItem} from your todo`;
    }
    return `${todoItem} not found in your todo`;
  }

  // Liệt kê công việc
  if (command === "what is on my todo?") {
    return todos.length ? `Your todo list includes: ${todos.join(", ")}` : "Your todo list is empty";
  }

  // Ngày hiện tại
  if (command === "what day is it today?") {
    return new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  }

  // Phép toán đơn giản
  if (command.startsWith("what is")) {
    try {
      return eval(command.replace("what is", "").trim());
    } catch {
      return "I couldn't understand the math expression";
    }
  }

  // Đặt hẹn giờ
  if (command.startsWith("set a timer for")) {
    const minutes = parseInt(command.replace("set a timer for", "").replace("minutes", "").trim(), 10);
    if (isNaN(minutes)) return "Please specify a valid number of minutes";
    setTimeout(() => console.log("Timer done"), minutes * 60000);
    return `Timer set for ${minutes} minutes`;
  }

  return "I didn't understand that command";
}
