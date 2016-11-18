// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBFzwnHeaU9IKqYW0pAlgD9SUOtraArvY4",
    authDomain: "testeab-cd.firebaseapp.com",
    databaseURL: "https://testeab-cd.firebaseio.com",
    storageBucket: "testeab-cd.appspot.com",
    messagingSenderId: "802259076960"
  };

  firebase.initializeApp(config);

  database = firebase.database();

  logs = this.database.ref('testeab-cd');

 function envia(tipo_evt, user_id_var, tempo_var, versao_var){
  this.logs.push(
  {
  user_id: user_id_var,
  tempo: tempo_var,
  versao: versao_var,
  tipo: tipo_evt
  }
  );
 }


function tempo_inicial(){
  // definir tempo inicial
  var d = Date.now();
  // enviar para Firebase
  envia("inicio", id_pessoa, d, versao);
}
