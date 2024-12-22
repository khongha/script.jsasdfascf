function submitMessage() {
  const wishes = document.getElementById('wishes').value;
  const response = document.getElementById('response');

  if (wishes) {
    response.textContent = `Cảm ơn em đã chia sẻ mong muốn của mình! Anh rất trân trọng và sẽ luôn cố gắng để xây dựng một tương lai tuyệt vời cùng em! 💖`;
    response.style.color = '#ff1493';
    
    // Gửi email với nội dung mong muốn
    const email = "khonghasc1@gmail.com";
    const subject = "Mong muốn tương lai của chúng ta";
    const body = `Mong muốn của em là:\n\n${wishes}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    document.getElementById('wishes').value = '';
  } else {
    response.textContent = 'Vui lòng chia sẻ mong muốn của em với anh nhé!';
    response.style.color = '#fff';
  }
}

// Thêm hiệu ứng động lung linh
document.body.style.animation = "fadeIn 3s ease-out";

@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
