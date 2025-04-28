// Chatbot especializado en traumatología para el Dr. Marco Bolaños
// Aseguramos que el chatbot se inicialice correctamente tanto en vista previa como al abrir el archivo directamente
window.addEventListener('load', () => {
    // Crear el contenedor del chatbot si no existe
    if (!document.querySelector('.chatbot-container')) {
        createChatbotInterface();
    }
    
    // Función para crear la interfaz del chatbot
    function createChatbotInterface() {
        // Crear el contenedor principal
        const chatbotContainer = document.createElement('div');
        chatbotContainer.className = 'chatbot-container';
        
        // Crear el botón del chatbot
        const chatbotButton = document.createElement('div');
        chatbotButton.className = 'chatbot-button';
        chatbotButton.innerHTML = '<i class="fas fa-comment-medical"></i>';
        
        // Crear la ventana del chatbot
        const chatbotWindow = document.createElement('div');
        chatbotWindow.className = 'chatbot-window';
        
        // Añadir elementos al DOM
        chatbotContainer.appendChild(chatbotButton);
        chatbotContainer.appendChild(chatbotWindow);
        document.body.appendChild(chatbotContainer);
        
        // Configurar la ventana del chatbot (se completará más adelante)
        setupChatbotWindow(chatbotWindow);
        
        // Añadir evento de clic al botón
        chatbotButton.addEventListener('click', () => {
            chatbotWindow.style.opacity = '1';
            chatbotWindow.style.transform = 'translateY(0)';
            chatbotWindow.style.pointerEvents = 'auto';
        });
    }
    
    // Función para configurar la ventana del chatbot
    function setupChatbotWindow(chatbotWindow) {
        // Crear el encabezado
        const header = document.createElement('div');
        header.className = 'chatbot-header';
        header.innerHTML = `
            <div class="chatbot-title">
                <i class="fas fa-user-md"></i>
                <span>Dr. Marco Bolaños - Asistente Virtual</span>
            </div>
            <div class="chatbot-close">
                <i class="fas fa-times"></i>
            </div>
        `;
        
        // Crear el área de mensajes
        const messagesArea = document.createElement('div');
        messagesArea.className = 'chatbot-messages';
        
        // Crear el área de sugerencias
        const suggestionsArea = document.createElement('div');
        suggestionsArea.className = 'chatbot-suggestions';
        
        // Crear el área de entrada
        const inputArea = document.createElement('div');
        inputArea.className = 'chatbot-input';
        inputArea.innerHTML = `
            <input type="text" placeholder="Escribe tu consulta aquí...">
            <button><i class="fas fa-paper-plane"></i></button>
        `;
        
        // Añadir elementos a la ventana
        chatbotWindow.appendChild(header);
        chatbotWindow.appendChild(messagesArea);
        chatbotWindow.appendChild(suggestionsArea);
        chatbotWindow.appendChild(inputArea);
        
        // Añadir evento para cerrar la ventana
        header.querySelector('.chatbot-close').addEventListener('click', () => {
            chatbotWindow.style.opacity = '0';
            chatbotWindow.style.transform = 'translateY(20px)';
            chatbotWindow.style.pointerEvents = 'none';
        });
    }
    // Base de conocimientos sobre traumatología y traumatología deportiva
    const knowledgeBase = {
        // Síntomas comunes y sus posibles causas
        sintomas: {
            'dolor rodilla': {
                respuesta: 'El dolor de rodilla puede ser causado por diversas condiciones como lesiones de menisco, ligamentos cruzados, condromalacia rotuliana o artrosis. La ubicación y tipo de dolor son importantes para un diagnóstico preciso.',
                sugerencias: [
                    'Dolor en la parte frontal de la rodilla', 
                    'Dolor en la parte interna de la rodilla', 
                    'Dolor en la parte externa de la rodilla',
                    'Dolor al subir/bajar escaleras',
                    'Dolor con inflamación visible',
                    'Dolor después de actividad deportiva',
                    'Rodilla que se bloquea o cede al caminar'
                ]
            },
            'dolor hombro': {
                respuesta: 'El dolor de hombro puede indicar lesiones como tendinitis del manguito rotador, bursitis, luxación o pinzamiento subacromial. La limitación de movimiento y el tipo de dolor son claves para el diagnóstico.',
                sugerencias: [
                    'Dolor al levantar el brazo por encima de la cabeza', 
                    'Dolor nocturno que interrumpe el sueño', 
                    'Dolor con limitación de movimiento',
                    'Dolor después de actividad deportiva',
                    'Dolor con sensación de inestabilidad',
                    'Dolor con chasquidos al mover el hombro'
                ]
            },
            'dolor tobillo': {
                respuesta: 'El dolor de tobillo suele relacionarse con esguinces, fracturas, tendinitis o inestabilidad crónica. La evaluación adecuada es fundamental para determinar el tratamiento correcto.',
                sugerencias: [
                    'Dolor después de torcedura reciente', 
                    'Dolor con hinchazón y moretones', 
                    'Dolor crónico después de esguinces previos',
                    'Dolor al caminar en superficies irregulares',
                    'Dolor con sensación de inestabilidad',
                    'Dolor en el tendón de Aquiles'
                ]
            },
            'dolor espalda': {
                respuesta: 'El dolor de espalda puede deberse a hernias discales, contracturas musculares, estenosis del canal o problemas posturales. La localización y la irradiación del dolor son importantes para el diagnóstico.',
                sugerencias: [
                    'Dolor lumbar que se irradia a la pierna', 
                    'Dolor cervical con irradiación al brazo', 
                    'Dolor que empeora al estar sentado',
                    'Dolor que empeora al estar de pie',
                    'Dolor con limitación de movimiento',
                    'Dolor después de levantar peso',
                    'Dolor con hormigueo o entumecimiento'
                ]
            },
            'inflamación': {
                respuesta: 'La inflamación articular puede indicar traumatismos, artritis, bursitis o procesos infecciosos. Es importante evaluar si hay otros síntomas asociados como enrojecimiento o calor local.',
                sugerencias: [
                    'Inflamación repentina después de golpe o caída', 
                    'Inflamación gradual sin trauma previo', 
                    'Inflamación con enrojecimiento y calor',
                    'Inflamación con limitación de movimiento',
                    'Inflamación recurrente en la misma articulación',
                    'Inflamación en múltiples articulaciones'
                ]
            },
            'crujidos': {
                respuesta: 'Los crujidos articulares pueden ser normales o indicar desgaste del cartílago, lesiones meniscales o problemas de alineación. Si están acompañados de dolor, podrían requerir evaluación.',
                sugerencias: [
                    'Crujidos dolorosos en la rodilla', 
                    'Crujidos en el hombro al moverlo', 
                    'Crujidos que han aumentado con el tiempo',
                    'Crujidos con bloqueo articular ocasional',
                    'Crujidos después de lesión previa',
                    'Crujidos en múltiples articulaciones'
                ]
            },
            'inestabilidad': {
                respuesta: 'La sensación de inestabilidad articular puede indicar lesiones ligamentarias, problemas neuromusculares o alteraciones propioceptivas que requieren evaluación especializada.',
                sugerencias: [
                    'Inestabilidad en la rodilla al girar o cambiar de dirección', 
                    'Inestabilidad en el hombro al levantar peso', 
                    'Inestabilidad en el tobillo al caminar en superficies irregulares',
                    'Inestabilidad después de lesión deportiva',
                    'Inestabilidad con episodios de luxación',
                    'Inestabilidad que ha empeorado con el tiempo'
                ]
            }
        },
        
        // Lesiones deportivas comunes
        lesiones: {
            'ligamento cruzado': {
                respuesta: 'La lesión del ligamento cruzado anterior (LCA) es común en deportes con cambios bruscos de dirección. Se caracteriza por un dolor intenso, inflamación rápida y sensación de inestabilidad. El Dr. Bolaños tiene amplia experiencia en su tratamiento artroscópico.',
                sugerencias: [
                    'Escuché un chasquido al momento de la lesión', 
                    'Mi rodilla cede al apoyar o girar', 
                    'Tengo inflamación importante en la rodilla',
                    'Me lesioné jugando fútbol/baloncesto',
                    'Tengo dolor al flexionar completamente la rodilla',
                    'Ya me hicieron una resonancia magnética'
                ]
            },
            'menisco': {
                respuesta: 'Las lesiones de menisco pueden ocurrir por movimientos rotacionales de la rodilla. Los síntomas incluyen dolor localizado, bloqueos articulares y derrame. El tratamiento puede ser conservador o quirúrgico dependiendo del tipo de lesión.',
                sugerencias: [
                    'Mi rodilla se bloquea en ciertos movimientos', 
                    'Siento dolor al girar la rodilla', 
                    'Tengo dolor en la parte interna de la rodilla',
                    'Tengo dolor en la parte externa de la rodilla',
                    'Siento un chasquido al doblar la rodilla',
                    'Me han dicho que tengo una rotura de menisco'
                ]
            },
            'manguito rotador': {
                respuesta: 'Las lesiones del manguito rotador son frecuentes en deportes de lanzamiento. Causan dolor al elevar el brazo y debilidad. El Dr. Bolaños ofrece tratamientos desde terapia física hasta reparación artroscópica según la gravedad.',
                sugerencias: [
                    'Tengo dificultad para dormir sobre ese hombro', 
                    'Siento debilidad al levantar objetos', 
                    'Me duele al levantar el brazo por encima de la cabeza',
                    'Practico deportes de lanzamiento (béisbol, tenis)',
                    'Me han diagnosticado una rotura del manguito',
                    'He recibido infiltraciones sin mejoría'
                ]
            },
            'tendinitis': {
                respuesta: 'La tendinitis es la inflamación de un tendón por sobreuso o movimientos repetitivos. El tratamiento incluye reposo, antiinflamatorios y rehabilitación. En casos crónicos pueden considerarse otras opciones terapéuticas.',
                sugerencias: [
                    'El dolor mejora con el reposo', 
                    'He aumentado mi actividad física recientemente', 
                    'Tengo tendinitis en el codo (codo de tenista)',
                    'Tengo tendinitis en el tendón de Aquiles',
                    'Tengo tendinitis rotuliana (rodilla de saltador)',
                    'He probado con antiinflamatorios sin mejoría'
                ]
            },
            'esguince': {
                respuesta: 'Los esguinces son lesiones ligamentarias por estiramiento excesivo. Se clasifican según su gravedad y requieren desde reposo hasta cirugía en casos severos. El diagnóstico preciso determina el tratamiento adecuado.',
                sugerencias: [
                    'No puedo apoyar el pie/articulación afectada', 
                    'Me lesioné hace menos de 48 horas', 
                    'Tengo un esguince de tobillo recurrente',
                    'Tengo mucha inflamación y moretones',
                    'Me han clasificado como esguince grado II',
                    'He tenido varios esguinces en el mismo tobillo'
                ]
            },
            'fractura': {
                respuesta: 'Las fracturas requieren atención inmediata. El Dr. Bolaños está especializado en el tratamiento de fracturas deportivas, buscando la recuperación más rápida posible para el retorno a la actividad.',
                sugerencias: [
                    'He notado deformidad en la zona', 
                    'El dolor es intenso incluso en reposo', 
                    'Me han diagnosticado una fractura por estrés',
                    'Tengo una fractura en un dedo del pie/mano',
                    'Me han colocado un yeso/férula',
                    'Quiero saber cuándo podré volver a mi actividad deportiva'
                ]
            }
        },
        
        // Tratamientos y especialidades
        tratamientos: {
            'artroscopia': {
                respuesta: 'La artroscopia es una técnica mínimamente invasiva que permite diagnosticar y tratar lesiones articulares con mínimas incisiones. El Dr. Bolaños es especialista en artroscopia de rodilla, hombro y tobillo.',
                accion: 'servicios'
            },
            'rehabilitacion': {
                respuesta: 'La rehabilitación es fundamental en el tratamiento de lesiones traumatológicas. El Dr. Bolaños trabaja con un equipo multidisciplinario para garantizar una recuperación óptima.',
                accion: 'servicios'
            },
            'medicina deportiva': {
                respuesta: 'La medicina deportiva se enfoca en el tratamiento y prevención de lesiones relacionadas con la actividad física. El Dr. Bolaños tiene amplia experiencia en el manejo de deportistas de todos los niveles.',
                accion: 'servicios'
            },
            'protesis': {
                respuesta: 'Las prótesis articulares son una solución para casos de artrosis avanzada. El Dr. Bolaños utiliza las técnicas más modernas para garantizar los mejores resultados.',
                accion: 'servicios'
            }
        },
        
        // Respuestas generales
        general: {
            saludo: 'Hola, soy el asistente virtual del Dr. Marco Bolaños, especialista en Traumatología y Artroscopía. ¿En qué puedo ayudarte hoy?',
            despedida: 'Gracias por contactar con el asistente del Dr. Bolaños. Recuerda que esta información es orientativa y no sustituye una consulta médica profesional.',
            consulta: 'Para una evaluación personalizada, el Dr. Bolaños estaría encantado de atenderte en consulta. ¿Te gustaría agendar una cita?',
            noEntiendo: 'Lo siento, no he podido entender tu consulta. ¿Podrías reformularla o elegir una de las opciones sugeridas?',
            contacto: 'Puedes contactar directamente con la consulta del Dr. Bolaños al 591 79456123 o escribir por WhatsApp para agendar una cita.',
            emergencia: 'Si estás experimentando un dolor intenso, incapacidad para mover la articulación, o la lesión es reciente con inflamación severa, te recomiendo buscar atención médica inmediata.'
        }
    };

    // Sugerencias iniciales para mostrar al usuario
    const sugerenciasIniciales = [
        'Dolor en la rodilla',
        'Lesión deportiva',
        'Artroscopia',
        'Dolor en el hombro',
        'Rehabilitación'
    ];
    
    // Mapeo de sugerencias a palabras clave de la base de conocimientos
    const mapeoSugerencias = {
        'Dolor en la rodilla': 'dolor rodilla',
        'Dolor en el hombro': 'dolor hombro',
        'Lesión deportiva': 'lesiones',
        'Artroscopia': 'artroscopia',
        'Rehabilitación': 'rehabilitacion'
    };

    // Obtener referencias a los elementos del chatbot
    // Usamos los elementos creados en createChatbotInterface
    const chatbotContainer = document.querySelector('.chatbot-container');
    const chatbotWindow = document.querySelector('.chatbot-window');
    
    // Actualizar la estructura interna de la ventana si es necesario
    if (chatbotWindow) {
        chatbotWindow.innerHTML = `
            <div class="chatbot-header">
                <div class="chatbot-title">
                    <img src="img/favicon.png" alt="Dr. Bolaños">
                    <span>Asistente Dr. Bolaños</span>
                </div>
                <div class="chatbot-close">
                    <i class="fas fa-times"></i>
                </div>
            </div>
            <div class="chatbot-messages" id="chatbot-messages"></div>
            <div class="chatbot-suggestions" id="chatbot-suggestions"></div>
            <div class="chatbot-input">
                <input type="text" id="user-input" placeholder="Escribe tu consulta aquí...">
                <button id="send-button"><i class="fas fa-paper-plane"></i></button>
            </div>
        `;
    }
    
    // Referencias a elementos del DOM
    const messagesContainer = document.getElementById('chatbot-messages');
    const suggestionsContainer = document.getElementById('chatbot-suggestions');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');
    const closeButton = document.querySelector('.chatbot-close');
    
    // Función para mostrar mensaje del bot
    function addBotMessage(text, delay = 500, withTyping = true) {
        if (withTyping) {
            // Mostrar indicador de escritura
            const typingIndicator = document.createElement('div');
            typingIndicator.className = 'typing-indicator';
            typingIndicator.innerHTML = `
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
            `;
            messagesContainer.appendChild(typingIndicator);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
            
            // Después del delay, reemplazar con el mensaje real
            setTimeout(() => {
                messagesContainer.removeChild(typingIndicator);
                const messageElement = document.createElement('div');
                messageElement.className = 'message bot-message';
                messageElement.textContent = text;
                messagesContainer.appendChild(messageElement);
                messagesContainer.scrollTop = messagesContainer.scrollHeight;
            }, delay);
        } else {
            // Añadir mensaje directamente sin animación
            const messageElement = document.createElement('div');
            messageElement.className = 'message bot-message';
            messageElement.textContent = text;
            messagesContainer.appendChild(messageElement);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }
    }
    
    // Función para mostrar mensaje del usuario
    function addUserMessage(text) {
        const messageElement = document.createElement('div');
        messageElement.className = 'message user-message';
        messageElement.textContent = text;
        messagesContainer.appendChild(messageElement);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
    
    // Función para mostrar sugerencias
    function showSuggestions(suggestions) {
        suggestionsContainer.innerHTML = '';
        suggestions.forEach(suggestion => {
            const chip = document.createElement('div');
            chip.className = 'suggestion-chip';
            chip.textContent = suggestion;
            chip.addEventListener('click', () => {
                userInput.value = suggestion;
                handleUserInput();
            });
            suggestionsContainer.appendChild(chip);
        });
        
        // Si hay muchas sugerencias, añadir un indicador visual
        if (suggestions.length > 3) {
            const indicador = document.createElement('div');
            indicador.className = 'suggestion-indicator';
            indicador.textContent = '↑↓ Más opciones disponibles';
            suggestionsContainer.appendChild(indicador);
        }
    }
    
    // Función para mostrar botones de acción
    function addActionButton(text, action) {
        const messageElement = document.createElement('div');
        messageElement.className = 'message bot-message';
        
        let buttonHtml = '';
        
        if (action === 'whatsapp') {
            buttonHtml = `<a href="https://wa.me/59162364446?text=Hola%20Dr.%20Bolaños,%20quisiera%20agendar%20una%20cita" class="action-button" target="_blank"><i class="fab fa-whatsapp"></i> Contactar por WhatsApp</a>`;
        } else if (action === 'servicios') {
            buttonHtml = `<a href="#" class="action-button" id="ver-servicios"><i class="fas fa-list-ul"></i> Ver servicios</a>`;
        } else if (action === 'perfil') {
            buttonHtml = `<a href="#" class="action-button" id="ver-perfil"><i class="fas fa-user-md"></i> Conocer al Dr. Bolaños</a>`;
        }
        
        messageElement.innerHTML = `${text}<br>${buttonHtml}`;
        messagesContainer.appendChild(messageElement);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        
        // Añadir eventos a los botones
        if (action === 'servicios') {
            document.getElementById('ver-servicios').addEventListener('click', (e) => {
                e.preventDefault();
                // Cerrar el chatbot
                chatbotWindow.classList.remove('active');
                // Simular clic en el enlace de servicios del menú principal
                const serviciosLink = document.querySelector('.main-nav a[data-image="servicios"]');
                if (serviciosLink) serviciosLink.click();
            });
        } else if (action === 'perfil') {
            document.getElementById('ver-perfil').addEventListener('click', (e) => {
                e.preventDefault();
                // Cerrar el chatbot
                chatbotWindow.classList.remove('active');
                // Simular clic en el enlace de acerca del menú principal
                const acercaLink = document.querySelector('.main-nav a[data-image="acerca"]');
                if (acercaLink) acercaLink.click();
            });
        }
    }
    
    // Función para procesar la entrada del usuario
    function processUserInput(input) {
        input = input.toLowerCase().trim();
        
        // Buscar coincidencias en la base de conocimientos
        let found = false;
        
        // Verificar si la entrada coincide con alguna sugerencia del mapeo
        for (const sugerencia in mapeoSugerencias) {
            if (input.toLowerCase() === sugerencia.toLowerCase()) {
                const keyword = mapeoSugerencias[sugerencia];
                
                // Si la sugerencia es 'Lesión deportiva', mostrar información general sobre lesiones
                if (keyword === 'lesiones') {
                    addBotMessage('Las lesiones deportivas son muy comunes y pueden afectar diferentes partes del cuerpo. El Dr. Bolaños es especialista en el diagnóstico y tratamiento de todo tipo de lesiones deportivas.');
                    setTimeout(() => {
                        showSuggestions(['Ligamento cruzado', 'Menisco', 'Manguito rotador', 'Tendinitis', 'Esguince']);
                    }, 1000);
                    found = true;
                    break;
                }
                
                // Buscar en la categoría correspondiente
                if (keyword.includes('dolor')) {
                    // Buscar en síntomas
                    if (knowledgeBase.sintomas[keyword]) {
                        const info = knowledgeBase.sintomas[keyword];
                        addBotMessage(info.respuesta);
                        if (info.sugerencias && info.sugerencias.length > 0) {
                            setTimeout(() => {
                                addBotMessage('Por favor, selecciona una opción más específica para ayudarte mejor:');
                                showSuggestions(info.sugerencias);
                            }, 1000);
                        }
                        setTimeout(() => {
                            addActionButton(knowledgeBase.general.consulta, 'whatsapp');
                        }, 2000);
                        found = true;
                        break;
                    }
                } else if (knowledgeBase.tratamientos[keyword]) {
                    // Buscar en tratamientos
                    const info = knowledgeBase.tratamientos[keyword];
                    addBotMessage(info.respuesta);
                    setTimeout(() => {
                        addActionButton('¿Te gustaría conocer más sobre nuestros servicios?', info.accion);
                    }, 1000);
                    found = true;
                    break;
                }
            }
        }
        
        // Si no se encontró en el mapeo, continuar con la búsqueda normal
        // Verificar si es una consulta sobre síntomas
        if (!found) {
            for (const keyword in knowledgeBase.sintomas) {
                if (input.includes(keyword)) {
                    const info = knowledgeBase.sintomas[keyword];
                    addBotMessage(info.respuesta);
                    
                    // Mostrar sugerencias relacionadas
                    if (info.sugerencias && info.sugerencias.length > 0) {
                        setTimeout(() => {
775935                            addBotMessage('Por favor, selecciona una opción más específica para ayudarte mejor:');
                            showSuggestions(info.sugerencias);
                        }, 1000);
                    }
                    
                    // Sugerir consulta después de responder sobre síntomas
                    setTimeout(() => {
                        addActionButton(knowledgeBase.general.consulta, 'whatsapp');
                    }, 2000);
                    
                    found = true;
                    break;
                }
            }
        }
        
        // Verificar si es una consulta sobre lesiones
        if (!found) {
            for (const keyword in knowledgeBase.lesiones) {
                if (input.includes(keyword)) {
                    const info = knowledgeBase.lesiones[keyword];
                    addBotMessage(info.respuesta);
                    
                    // Mostrar sugerencias relacionadas
                    if (info.sugerencias && info.sugerencias.length > 0) {
                        setTimeout(() => {
                            addBotMessage('Por favor, selecciona una opción más específica sobre esta lesión:');
                            showSuggestions(info.sugerencias);
                        }, 1000);
                    }
                    
                    // Sugerir consulta después de responder sobre lesiones
                    setTimeout(() => {
                        addActionButton(knowledgeBase.general.consulta, 'whatsapp');
                    }, 2000);
                    
                    found = true;
                    break;
                }
            }
        }
        
        // Verificar si es una consulta sobre tratamientos
        if (!found) {
            for (const keyword in knowledgeBase.tratamientos) {
                if (input.includes(keyword)) {
                    const info = knowledgeBase.tratamientos[keyword];
                    addBotMessage(info.respuesta);
                    
                    // Añadir botón de acción para ver servicios
                    setTimeout(() => {
                        addActionButton('¿Te gustaría conocer más sobre nuestros servicios?', info.accion);
                    }, 1000);
                    
                    found = true;
                    break;
                }
            }
        }
        
        // Verificar si es una consulta sobre cita o contacto
        if (!found && (input.includes('cita') || input.includes('consulta') || input.includes('contacto') || input.includes('whatsapp') || input.includes('dirección') || input.includes('direccion') || input.includes('emergencia') || input.includes('emergencias') || input.includes('telefono') || input.includes('teléfono'))) {
            addBotMessage('Información de contacto:\n\nDirección: Avenida 6 de agosto esquina Cordero. Edif. Mercurio piso 6.\nNúmero de emergencias: 77593335\nConsultorio: 22152014\nWhatsApp: 591 62364446');
            setTimeout(() => {
                addActionButton('Puedes agendar tu cita ahora mismo:', 'whatsapp');
            }, 1000);
            found = true;
        }
        
        // Verificar si es una consulta sobre el doctor
        if (!found && (input.includes('doctor') || input.includes('dr') || input.includes('bolaños') || input.includes('quien') || input.includes('experiencia'))) {
            addBotMessage('El Dr. Marco Bolaños es especialista en Traumatología y Artroscopía, con amplia experiencia en el tratamiento de lesiones deportivas y problemas articulares.');
            setTimeout(() => {
                addActionButton('¿Te gustaría conocer más sobre el Dr. Bolaños?', 'perfil');
            }, 1000);
            found = true;
        }
        
        // Si no se encontró ninguna coincidencia
        if (!found) {
            addBotMessage(knowledgeBase.general.noEntiendo);
            setTimeout(() => {
                showSuggestions(sugerenciasIniciales);
            }, 1000);
        }
    }
    
    // Manejar la entrada del usuario
    function handleUserInput() {
        const text = userInput.value.trim();
        if (text === '') return;
        
        // Mostrar mensaje del usuario
        addUserMessage(text);
        userInput.value = '';
        
        // Limpiar sugerencias
        suggestionsContainer.innerHTML = '';
        
        // Procesar la entrada
        processUserInput(text);
    }
    
    // Event listeners
    sendButton.addEventListener('click', handleUserInput);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleUserInput();
    });
    
    // Abrir/cerrar el chatbot
    chatbotButton.addEventListener('click', () => {
        chatbotWindow.classList.toggle('active');
        
        // Si es la primera vez que se abre, mostrar mensaje de bienvenida
        if (messagesContainer.children.length === 0) {
            addBotMessage('¡Bienvenido al asistente virtual del Dr. Marco Bolaños! Estamos aquí para ayudarte con cualquier consulta sobre traumatología y artroscopía. ¿En qué podemos ayudarte hoy?', 500, false);
            setTimeout(() => {
                showSuggestions(sugerenciasIniciales);
            }, 1000);
        }
    });
    
    // Mostrar el chatbot automáticamente al cargar la página
    setTimeout(() => {
        chatbotWindow.classList.add('active');
        if (messagesContainer.children.length === 0) {
            addBotMessage('¡Bienvenido al asistente virtual del Dr. Marco Bolaños! Estamos aquí para ayudarte con cualquier consulta sobre traumatología y artroscopía. ¿En qué podemos ayudarte hoy?', 500, false);
            setTimeout(() => {
                showSuggestions(sugerenciasIniciales);
            }, 1000);
        }
    }, 2000);
    
    // Cerrar el chatbot
    closeButton.addEventListener('click', () => {
        chatbotWindow.classList.remove('active');
    });
});