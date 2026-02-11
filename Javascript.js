// ============== GENERAR CORAZONES EN EL FONDO ==============
function generarCorazonesFondo() {
    const fondo = document.querySelector(".fondo-corazones");
    
    setInterval(() => {
        const corazon = document.createElement("div");
        corazon.classList.add("corazon-flotante");
        
        // Emojis de corazones variados
        const corazones = ["💖", "💗", "💓", "💕", "💘", "💝", "💞", "❤️", "🩷"];
        corazon.innerHTML = corazones[Math.floor(Math.random() * corazones.length)];
        
        // Posición horizontal aleatoria
        corazon.style.left = Math.random() * 100 + "vw";
        
        // Tamaño aleatorio
        const tamaño = Math.random() * 30 + 25;
        corazon.style.fontSize = tamaño + "px";
        
        // Duración aleatoria
        const duracion = Math.random() * 5 + 8;
        corazon.style.animationDuration = duracion + "s";
        
        fondo.appendChild(corazon);
        
        // Remover después de la animación
        setTimeout(() => {
            corazon.remove();
        }, duracion * 1000);
        
    }, 500); // Generar cada 500ms
}

// ============== ACTIVAR LLUVIA ==============
function activarLluvia() {
    const fondoLluvia = document.querySelector(".fondo-lluvia");
    fondoLluvia.classList.remove("oculto");
    
    // Generar gotas de lluvia continuamente
    const intervaloLluvia = setInterval(() => {
        // Verificar si la lluvia sigue visible
        if (fondoLluvia.classList.contains("oculto")) {
            clearInterval(intervaloLluvia);
            return;
        }
        
        const gota = document.createElement("div");
        gota.classList.add("gota");
        
        // Posición horizontal aleatoria
        gota.style.left = Math.random() * 100 + "vw";
        
        // Velocidad aleatoria
        const duracion = Math.random() * 0.5 + 0.5;
        gota.style.animationDuration = duracion + "s";
        
        fondoLluvia.appendChild(gota);
        
        // Remover después de la animación
        setTimeout(() => {
            gota.remove();
        }, duracion * 1000);
        
    }, 50); // Generar gotas rápidamente
}

// ============== MOSTRAR TRUENO ==============
function mostrarTrueno() {
    const trueno = document.querySelector(".trueno");
    trueno.classList.remove("oculto");
    trueno.classList.add("flash");
    
    // Reproducir sonido de trueno (opcional - descomenta si tienes archivo de audio)
    // const audio = new Audio('trueno.mp3');
    // audio.play();
    
    setTimeout(() => {
        trueno.classList.remove("flash");
        setTimeout(() => {
            trueno.classList.add("oculto");
        }, 100);
    }, 150);
}

// ============== GENERAR CORAZONES EN PANEL FINAL ==============
function generarCorazonesPanel() {
    const container = document.querySelector(".corazones-flotantes");
    
    if (!container) return;
    
    setInterval(() => {
        const corazon = document.createElement("div");
        corazon.classList.add("corazon-panel");
        
        // Emojis de corazones
        const corazones = ["💖", "💗", "💓", "💕", "💘", "💝", "💞", "❤️", "🩷", "✨"];
        corazon.innerHTML = corazones[Math.floor(Math.random() * corazones.length)];
        
        // Posición horizontal aleatoria
        corazon.style.left = Math.random() * 100 + "%";
        
        // Posición vertical inicial (desde abajo)
        corazon.style.bottom = "0";
        
        // Tamaño aleatorio
        const tamaño = Math.random() * 25 + 20;
        corazon.style.fontSize = tamaño + "px";
        
        // Duración aleatoria
        const duracion = Math.random() * 3 + 4;
        corazon.style.animationDuration = duracion + "s";
        
        container.appendChild(corazon);
        
        // Remover después de la animación
        setTimeout(() => {
            corazon.remove();
        }, duracion * 1000);
        
    }, 300); // Generar cada 300ms
}

// ============== GENERAR CONFETI ==============
function generarConfeti() {
    const container = document.querySelector(".confeti-container");
    
    if (!container) return;
    
    const colores = ["#ff6b9d", "#c06c84", "#f67280", "#355c7d", "#6c5b7b", "#feca57"];
    
    // Generar ráfaga inicial de confeti
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confeti = document.createElement("div");
            confeti.classList.add("confeti");
            
            // Color aleatorio
            confeti.style.backgroundColor = colores[Math.floor(Math.random() * colores.length)];
            
            // Posición horizontal aleatoria
            confeti.style.left = Math.random() * 100 + "%";
            
            // Tamaño aleatorio
            const tamaño = Math.random() * 8 + 5;
            confeti.style.width = tamaño + "px";
            confeti.style.height = tamaño + "px";
            
            // Duración aleatoria
            const duracion = Math.random() * 2 + 2;
            confeti.style.animationDuration = duracion + "s";
            
            // Delay aleatorio para efecto escalonado
            confeti.style.animationDelay = Math.random() * 0.5 + "s";
            
            container.appendChild(confeti);
            
            // Remover después de la animación
            setTimeout(() => {
                confeti.remove();
            }, (duracion + 0.5) * 1000);
            
        }, i * 30); // Escalonar la creación
    }
    
    // Continuar generando confeti
    let contador = 0;
    const intervalo = setInterval(() => {
        if (contador > 30) { // Detener después de un tiempo
            clearInterval(intervalo);
            return;
        }
        
        const confeti = document.createElement("div");
        confeti.classList.add("confeti");
        
        confeti.style.backgroundColor = colores[Math.floor(Math.random() * colores.length)];
        confeti.style.left = Math.random() * 100 + "%";
        
        const tamaño = Math.random() * 8 + 5;
        confeti.style.width = tamaño + "px";
        confeti.style.height = tamaño + "px";
        
        const duracion = Math.random() * 2 + 2;
        confeti.style.animationDuration = duracion + "s";
        
        container.appendChild(confeti);
        
        setTimeout(() => {
            confeti.remove();
        }, duracion * 1000);
        
        contador++;
    }, 200);
}

// ============== ANIMAR VERSOS (ENTRADA ESCALONADA) ==============
function animarVersos() {
    const versos = document.querySelectorAll(".verso");
    
    versos.forEach((verso, index) => {
        verso.style.animationDelay = (index * 0.15) + "s";
    });
}
