// Importa lo necesario de Firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Configuración real de tu proyecto
const firebaseConfig = {
  apiKey: "AIzaSyAZAa-7BbX_BLmNNzLU3yI8T6N909y42Kg",
  authDomain: "game-of-thrones-characte-44d7b.firebaseapp.com",
  projectId: "game-of-thrones-characte-44d7b",
  storageBucket: "game-of-thrones-characte-44d7b.firebasestorage.app",
  messagingSenderId: "331258802874",
  appId: "1:331258802874:web:0f4ff05346934de0480883",
  measurementId: "G-QWFMNLRHT5"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Auth
const auth = getAuth(app);

// Inicializar Firestore
const db = getFirestore(app);

// Exportar para usar en otros archivos
export { auth, db };
