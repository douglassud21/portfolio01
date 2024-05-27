
/**Menu Hamburguer */

    function toggleMenu() {
        var navUl = document.querySelector('nav ul');
        navUl.classList.toggle('active');
    }

/**Efeito do Nome */

    function animateName() {
    const spans = document.querySelectorAll('.highlight span');
    let delay = 0;

    spans.forEach((span, index) => {
        delay += 0.5;
        setTimeout(() => {
            span.style.opacity = 1;
            span.style.transform = 'translateY(0)';
        }, delay * 1000);
    });

    // Adicionando um tempo de espera extra reduzido após a última letra ser animada
    setTimeout(() => {
        spans.forEach(span => {
            span.style.opacity = 0;
            span.style.transform = 'translateY(100%)';
        });
        setTimeout(animateName, delay * 100 + 100);
    }, delay * 1000);
    }

    animateName();

/**Efeito de Transição do inicio para o sobre mim */

    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
  
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  
    const stars = [];
    const numStars = 1000;
  
    function Star(x, y, radius, color, speed) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.color = color;
      this.speed = speed;
  
      this.draw = function() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
  
      this.update = function() {
        this.x -= this.speed;
  
        if (this.x < -this.radius) {
          this.x = canvas.width + this.radius;
          this.y = Math.random() * canvas.height;
        }
  
        this.draw();
      }
    }
  
    function createStars() {
      for (let i = 0; i < numStars; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = Math.random() * 2;
        const color = 'white';
        const speed = Math.random() * 2 + 0.5;
        stars.push(new Star(x, y, radius, color, speed));
      }
    }
  
    function animate() {
      requestAnimationFrame(animate);
      ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
  
      stars.forEach(star => {
        star.update();
      });
    }
  
    createStars();
    animate();

/**Efeito da Imagem em movimento */
  
    var imagemMovivel = document.getElementById("imagemMovivel");
    
    var posicao = 0;
    
    function animarImagem() {
       
        posicao -= 1;
        imagemMovivel.style.right = posicao + 'px';
    
        if (posicao <= -50) { 
            posicao = window.innerWidth; 
        }
    
        requestAnimationFrame(animarImagem);
    }
    
        animarImagem();

/**Efeito de movimentação suave no site */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - 70, // Ajuste este valor conforme necessário
                behavior: 'smooth'
            });
        });
    });

/**modo de cores */

    let trilho = document.getElementById('trilho')
    let body = document.querySelector('body')

    trilho.addEventListener('click', ()=>{
    trilho.classList.toggle('ligth')
    body.classList.toggle('ligth')
    })




