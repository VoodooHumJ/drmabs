document.addEventListener('DOMContentLoaded', () => {
    // Base de conocimientos del chatbot
    const knowledgeBase = {
        // Artroscopía
        'artroscopia': 'La artroscopía es una técnica quirúrgica mínimamente invasiva que permite visualizar, diagnosticar y tratar lesiones dentro de una articulación mediante pequeñas incisiones. Es menos dolorosa y tiene un tiempo de recuperación más rápido que la cirugía tradicional.',
        'artroscopia de rodilla': 'La artroscopía de rodilla es un procedimiento común para tratar lesiones como desgarros de menisco, reconstrucción de ligamento cruzado anterior (LCA), y limpieza de cartílago dañado. La recuperación suele ser de 2-6 semanas dependiendo del procedimiento específico.',
        'artroscopia de hombro': 'La artroscopía de hombro se utiliza para reparar el manguito rotador, tratar la inestabilidad del hombro, eliminar tejido inflamado y tratar el síndrome de pinzamiento. La recuperación completa puede tomar de 4 a 6 meses.',
        'recuperacion artroscopia': 'La recuperación después de una artroscopía varía según la articulación y el procedimiento específico. Generalmente, se puede caminar el mismo día para artroscopías de rodilla, y se recomienda fisioterapia para recuperar movilidad y fuerza. La recuperación completa puede tomar desde 2 semanas hasta 6 meses.',
        
        // Prótesis
        'protesis': 'Las prótesis articulares son implantes diseñados para reemplazar articulaciones dañadas, generalmente por artrosis avanzada. Los tipos más comunes son las prótesis de cadera, rodilla y hombro.',
        'protesis de cadera': 'La prótesis de cadera reemplaza la articulación dañada con componentes metálicos y plásticos. Este procedimiento alivia el dolor y mejora significativamente la movilidad. La recuperación inicial toma 4-6 semanas, con recuperación completa en 3-6 meses.',
        'protesis de rodilla': 'La prótesis de rodilla sustituye las superficies articulares dañadas. Existen prótesis totales y parciales (unicompartimentales). La recuperación requiere fisioterapia intensiva, con una recuperación inicial de 6-8 semanas y completa en 6-12 meses.',
        'protesis de hombro': 'Las prótesis de hombro pueden ser anatómicas o invertidas, dependiendo del estado del manguito rotador. Se utilizan para tratar artrosis severa o fracturas complejas. La recuperación completa puede tomar 6-12 meses con terapia física.',
        'duracion protesis': 'La duración de una prótesis varía según el tipo, actividad del paciente y otros factores. En general, las prótesis modernas tienen una vida útil de 15-20 años, aunque algunas pueden durar más tiempo con los cuidados adecuados.',
        
        // Sintomatología
        'dolor de rodilla': 'El dolor de rodilla puede ser causado por lesiones (menisco, ligamentos), desgaste (artrosis), inflamación (artritis) o sobrecarga. Es importante evaluar si hay hinchazón, limitación de movimiento o inestabilidad para un diagnóstico preciso.',
        'dolor de cadera': 'El dolor de cadera puede deberse a artrosis, bursitis, tendinitis, fracturas o problemas en la columna lumbar. Si el dolor persiste más de una semana, limita su movilidad o se acompaña de hinchazón, debe consultar al especialista.',
        'dolor de hombro': 'El dolor de hombro suele relacionarse con lesiones del manguito rotador, tendinitis, bursitis, inestabilidad o artrosis. Si experimenta limitación de movimiento, debilidad o dolor nocturno, es recomendable una evaluación médica.',
        'crujidos articulares': 'Los crujidos articulares (crepitación) son comunes y no siempre indican un problema. Sin embargo, cuando se acompañan de dolor, hinchazón o limitación de movimiento, pueden indicar daño en el cartílago o artrosis.',
        
        // Lesiones deportivas
        'lesiones deportivas': 'Las lesiones deportivas más frecuentes incluyen esguinces, desgarros musculares, tendinitis, fracturas por estrés y lesiones de ligamentos. El tratamiento adecuado y la rehabilitación son fundamentales para una recuperación completa.',
        'rotura de ligamentos': 'La rotura de ligamentos, especialmente el ligamento cruzado anterior (LCA), es común en deportes con cambios bruscos de dirección. Los síntomas incluyen dolor intenso, hinchazón inmediata y sensación de inestabilidad. Suele requerir cirugía artroscópica.',
        'desgarro de menisco': 'El desgarro de menisco causa dolor localizado, hinchazón y posible bloqueo de la rodilla. Puede ocurrir por movimientos de torsión o en conjunto con otras lesiones. El tratamiento puede ser conservador o quirúrgico dependiendo del tipo y ubicación del desgarro.',
        'tendinitis': 'La tendinitis es la inflamación de un tendón, generalmente por sobrecarga o movimientos repetitivos. Causa dolor, especialmente durante el movimiento. El tratamiento incluye reposo, antiinflamatorios, fisioterapia y modificación de actividades.',
        
        // Ortogeriatría
        'ortogeriatria': 'La ortogeriatría es la especialidad que trata problemas traumatológicos y ortopédicos en personas mayores, con enfoque multidisciplinario. Las patologías más frecuentes son fracturas por osteoporosis, artrosis y problemas de movilidad.',
        'osteoporosis': 'La osteoporosis es una enfermedad que debilita los huesos, haciéndolos más propensos a fracturas. Es especialmente común en mujeres postmenopáusicas. El tratamiento incluye suplementos de calcio y vitamina D, medicamentos específicos y ejercicio adaptado.',
        'fractura de cadera': 'La fractura de cadera en adultos mayores es una lesión grave que requiere cirugía. La recuperación incluye movilización temprana y rehabilitación intensiva. Es fundamental prevenir complicaciones como trombosis o neumonía.',
        'artrosis': 'La artrosis es el desgaste del cartílago articular que causa dolor, rigidez y limitación funcional. El tratamiento incluye analgésicos, fisioterapia, infiltraciones y, en casos avanzados, cirugía de reemplazo articular.'
    };

    // Crear elementos del chatbot
    const createChatbotElements = () => {
        // Botón para abrir el chatbot
        const chatbotToggle = document.createElement('div');
        chatbotToggle.className = 'chatbot-toggle';
        chatbotToggle.innerHTML = '<i class="fas fa-comment"></i>';
        document.body.appendChild(chatbotToggle);

        // Contenedor principal del chatbot
        // En la función createChatbotElements, actualizar el HTML del contenedor
        const chatbotContainer = document.createElement('div');
        chatbotContainer.className = 'chatbot-container';
        chatbotContainer.innerHTML = `
            <div class="chatbot-header">
                <div class="chatbot-avatar">👨⚕️</div>
                <h3>Asistente Virtual - Dr. Bolaños</h3>
                <button class="chatbot-close"><i class="fas fa-times"></i></button>
            </div>
            <div class="chatbot-messages"></div>
            <div class="quick-options"></div>
            <div class="chatbot-input-container">
                <input type="text" class="chatbot-input" placeholder="Escribe tu consulta aquí...">
                <button class="chatbot-submit"><i class="fas fa-paper-plane"></i></button>
            </div>
        `;
        
        // Nueva función para crear botones de opción rápida
        const createQuickOptions = (options) => {
            const container = chatbot.container.querySelector('.quick-options');
            container.innerHTML = options.map(opt => 
                `<button class="quick-option" data-question="${opt}">${opt}</button>`
            ).join('');
        };
        document.body.appendChild(chatbotContainer);

        return {
            toggle: chatbotToggle,
            container: chatbotContainer,
            messages: chatbotContainer.querySelector('.chatbot-messages'),
            input: chatbotContainer.querySelector('.chatbot-input'),
            submit: chatbotContainer.querySelector('.chatbot-submit'),
            close: chatbotContainer.querySelector('.chatbot-close')
        };
    };

    // Elementos del chatbot
    const chatbot = createChatbotElements();

    // Función para añadir mensaje al chat
    const addMessage = (text, isUser = false) => {
        const messageElement = document.createElement('div');
        messageElement.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
        messageElement.textContent = text;
        chatbot.messages.appendChild(messageElement);
        chatbot.messages.scrollTop = chatbot.messages.scrollHeight;
    };

    // Función para mostrar información de contacto
    const showContactInfo = () => {
        const contactInfo = document.createElement('div');
        contactInfo.className = 'contact-info';
        contactInfo.innerHTML = `
            <p>📌 <strong>¿Necesitas una consulta presencial o por videollamada?</strong></p>
            <div class="contact-item">
                <i class="fab fa-whatsapp"></i>
                <a href="https://wa.me/59162364446" target="_blank">Escríbenos por WhatsApp</a>
            </div>
            <div class="contact-item">
                <i class="fas fa-phone-alt"></i>
                <a href="tel:+59122152014">2 215 2014 (Consultorio)</a>
            </div>
            <div class="contact-item emergency">
                <i class="fas fa-ambulance"></i>
                <a href="tel:+59177593335">775 93335 (Emergencias 24h)</a>
            </div>
            <div class="contact-item">
                <i class="fas fa-map-marker-alt"></i>
                <span>Av. 6 de Agosto esq. Cordero<br>Edif. Mercurio Piso 6, La Paz</span>
            </div>
        `;
        chatbot.messages.appendChild(contactInfo);
        chatbot.messages.scrollTop = chatbot.messages.scrollHeight;
    };

    // Función para procesar la entrada del usuario y generar respuesta
    // Modificar processUserInput
    const processUserInput = (userInput) => {
        const input = userInput.toLowerCase();
        
        // Verificar saludos/despedidas primero
        const socialKeywords = ['hola', 'buenos dias', 'buenas tardes', 'gracias', 'adios', 'chao'];
        for (const keyword of socialKeywords) {
            if (input === keyword) {
                addMessage(knowledgeBase[keyword], false);
                if (keyword === 'adios' || keyword === 'chao') {
                    setTimeout(() => showContactInfo(), 1000);
                }
                return;
            }
        }
        
        // Buscar coincidencias en la base de conocimientos
        let response = null;
        
        // Verificar palabras clave en la entrada del usuario
        for (const keyword in knowledgeBase) {
            if (input.includes(keyword)) {
                response = knowledgeBase[keyword];
                break;
            }
        }
        
        // Si no hay coincidencia específica, buscar categoría general
        if (!response) {
            if (input.includes('artro')) {
                response = knowledgeBase['artroscopia'];
            } else if (input.includes('prote') || input.includes('próte')) {
                response = knowledgeBase['protesis'];
            } else if (input.includes('dolor') || input.includes('molest')) {
                response = 'El dolor puede tener diversas causas. Para un diagnóstico preciso, es importante evaluar la ubicación, intensidad y factores desencadenantes. ¿Podría especificar más sobre su dolor (rodilla, cadera, hombro)?';
            } else if (input.includes('lesion') || input.includes('lesión') || input.includes('deporte')) {
                response = knowledgeBase['lesiones deportivas'];
            } else if (input.includes('mayor') || input.includes('ancian') || input.includes('edad avanzada')) {
                response = knowledgeBase['ortogeriatria'];
            } else {
                response = 'No tengo información específica sobre esa consulta. ¿Podría reformular su pregunta sobre artroscopía, prótesis, dolor articular o lesiones deportivas?';
            }
        }
        
        // Añadir respuesta al chat
        addMessage(response, false);
        
        // Mostrar información de contacto después de algunas interacciones
        if (chatbot.messages.querySelectorAll('.message').length > 4) {
            showContactInfo();
        }
    };

    // Actualizar el mensaje de bienvenida inicial
    addMessage(`¡Hola! Soy el Asistente virtual del Dr. Bolaños 🩺 ¿En qué puedo ayudarte hoy? Puedes:
    - Escribir tu consulta libremente ✍️
    - Elegir un tema de estos 👇
    - Preguntar por síntomas específicos 😖
    
    Temas principales:
    1. Artroscopía y cirugías mínimamente invasivas
    2. Prótesis articulares (cadera/rodilla/hombro)
    3. Lesiones deportivas 🏃♀️
    4. Dolor articular 😣
    5. Cuidados para adultos mayores 👵👴`);

    // Manejar envío de mensaje
    const handleSubmit = () => {
        const userInput = chatbot.input.value.trim();
        if (userInput) {
            addMessage(userInput, true);
            chatbot.input.value = '';
            
            // Simular tiempo de respuesta
            setTimeout(() => {
                processUserInput(userInput);
            }, 500);
        }
    };

    // Event listeners
    chatbot.submit.addEventListener('click', handleSubmit);
    chatbot.input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    });

    // Abrir/cerrar chatbot
    chatbot.toggle.addEventListener('click', () => {
        chatbot.container.classList.add('active');
        
        // Si es la primera vez que se abre, mostrar mensaje de bienvenida
        if (chatbot.messages.children.length === 0) {
            addMessage('¡Hola! Soy el asistente virtual del Dr. Bolaños. Puedo responder preguntas sobre artroscopía, prótesis de cadera, rodilla y hombro, así como sobre lesiones deportivas y ortogeriatría. ¿En qué puedo ayudarte hoy?');
        }
    });

    chatbot.close.addEventListener('click', () => {
        chatbot.container.classList.remove('active');
    });
});


const knowledgeBase = {
    // Nuevas interacciones sociales
    'hola': '¡Hola! 👋 Soy el asistente virtual del Dr. Bolaños. ¿En qué puedo ayudarte hoy? Puedes preguntar sobre:\n- Artroscopía 🏥\n- Prótesis articulares 🦵\n- Lesiones deportivas ⚽\n- Dolor articular 😣\n¿Por dónde empezamos?',
    'buenos dias': '¡Buenos días! ☀️ ¿Cómo te puedo ayudar hoy con tu consulta traumatológica?',
    'buenas tardes': '¡Buenas tardes! 🌇 Cuéntame, ¿qué síntomas o inquietudes tienes?',
    'gracias': '¡De nada! 😊 Si tienes más dudas, no hesites en preguntar. ¿Necesitas información adicional sobre algún tema en particular?',
    'adios': '¡Hasta luego! 👋 Recuerda que puedes contactarnos directamente:\n📞 Consultorio: 2 215 2014\n🚑 Emergencias: 775 93335\n📍 Edif. Mercurio Piso 6, La Paz\n¡Que tengas un excelente día!',

    // Respuesta mejorada para despedida
    'chao': '¡Nos vemos! 👋 Si necesitas más ayuda, aquí estoy. No olvides nuestros contactos:\n📱 WhatsApp: 59162364446\n🏥 Consultas programadas: 2 215 2014\n¡Cuídate mucho! 💪',
    
    'artroscopia': `¡Hola! 😊 La artroscopía es como una "cirugía de mínima invasión" donde usamos una pequeña cámara para revisar y reparar tus articulaciones. ¿Te gustaría saber sobre:
    - Recuperación post-cirugía 🩹
    - Tiempos de rehabilitación ⏳
    - Casos que requieren esta técnica? 👇`,
    
    'protesis': `Entiendo que quieres saber sobre prótesis. ¿Qué articulación te interesa?
    👉 Cadera 🏃♂️
    👉 Rodilla 🦵
    👉 Hombro 💪
    ¿O prefieres saber sobre duración y cuidados? ⌛`,
    
    // Resto del conocimiento actualizado con formato similar...
};

// Añadir función para manejar opciones rápidas
const handleQuickOption = (question) => {
    chatbot.input.value = question;
    handleSubmit();
};