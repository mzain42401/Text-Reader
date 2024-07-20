 
       
       function readText() {
            var userInput = document.getElementById('userInput');
            var userInputText = userInput.innerText;
            var words = userInputText.split(/\s+/);

            userInput.innerHTML = words.map(word => `<span>${word}</span>`).join(' ');

            var msg = new SpeechSynthesisUtterance(userInputText);
            var wordIndex = 0;

            msg.onboundary = function(event) {
                if (event.name === 'word') {
                    var spans = userInput.getElementsByTagName('span');
                    if (wordIndex > 0) {
                        spans[wordIndex - 1].classList.remove('highlight');
                    }
                    if (wordIndex < spans.length) {
                        spans[wordIndex].classList.add('highlight');
                    }
                    
                    if (wordIndex === spans.length-1) {
                        setTimeout(removeClass,1000)
                        function removeClass() {
                            
                            spans[spans.length-1].classList.remove('highlight');
                        }
                        
                    }
                    wordIndex++;
                }
            };

            window.speechSynthesis.speak(msg);
        }
        function stopReading() {
            window.speechSynthesis.cancel();
            
        }

        window.onbeforeunload = function() {
            window.speechSynthesis.cancel();

        };
    