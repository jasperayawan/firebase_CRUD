
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
    import { getDatabase, set, get, update, remove, ref, child } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyBCaTz-Ipxd5DQ8WFTIia4bj81-TbrFRrI",
      authDomain: "harvesthubauth.firebaseapp.com",
      databaseURL: "https://harvesthubauth-default-rtdb.firebaseio.com",
      projectId: "harvesthubauth",
      storageBucket: "harvesthubauth.appspot.com",
      messagingSenderId: "352168401310",
      appId: "1:352168401310:web:54fee6a08abb52ecefde8f"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const db = getDatabase();

    var enterID = document.getElementById('enterID')
    var enterName = document.getElementById('enterName')
    var enterAge = document.getElementById('enterAge')
    var findID = document.getElementById('findID')
    var findName = document.getElementById('findName')
    var findAge = document.getElementById('findAge')

    var insertBtn = document.getElementById('insert')
    var updateBtn = document.getElementById('update')
    var removeBtn = document.getElementById('remove')
    var findBtn = document.getElementById('find')

    
    function InsertData(){
        set(ref(db, "People/" + enterID.value), {
            Name: enterName.value,
            ID: enterID.value,
            Age: enterAge.value
        })
        .then(() => {
            alert("Data added successfully!")
        })
        .catch((error) => {
            alert(error)
        })
    }

    function FindData(){
        const dbref = ref(db);

        get(child(dbref, "People/" + findID.value))
        .then((snapshot) => {
            if(snapshot.exists()){
                 findName.innerHTML = "Name: " + snapshot.val().Name;
                 findAge.innerHTML = "Age: " + snapshot.val().Age;  
            } else {
                alert('No data found');
            }
        })
        .catch((error) => {
            alert(error)
        })
    }

    function UpdateData(){
        update(ref(db, "People/", + enterID.value), {
            Name: enterName.value,
            Age: enterAge.value
        })
        .then(() => {
            alert('Data updated successfully');
        })
        .catch((error) => {
            alert(error)
        });
    }

    function RemoveData(){
        remove(ref(db, "People/" + enterID.value))
        .then(() => {
            alert("Data removed successfully")
        })
        .catch((error) => {
            alert(error)
        })
    }
    
    insertBtn.addEventListener('click', InsertData)
    updateBtn.addEventListener('click', UpdateData)
    removeBtn.addEventListener('click', RemoveData)
    findBtn.addEventListener('click', FindData)
