if (annyang) {

    // Set annyang in debug mode
    annyang.debug();
  
    // Set annyang language 
    annyang.setLanguage('es-PE');
  
    // Add our commands to annyang
    annyang.addCommands({
      'hi','hello': function() {
        alert('Hello world!');
      },
      'show directions': function() {
        alert('Show directions!');
      },
      'call restaurant': function() {
        alert('Call restaurant!');
      }
    });
  
    // Tell KITT to use annyang
    SpeechKITT.annyang();
  
    // Define a stylesheet for KITT to use
  SpeechKITT.setStylesheet('//cdnjs.cloudflare.com/ajax/libs/SpeechKITT/1.0.0/themes/flat.css');
  
    // Add instructional texts
    SpeechKITT.setInstructionsText('Some commands to try…');
    SpeechKITT.setSampleCommands(['Show directions', 'Call restaurant']);
  
    // If user clicks start button, remember his choice for 1 minute
    SpeechKITT.rememberStatus(1);
    // Render KITT's interface
    SpeechKITT.vroom();
  } 