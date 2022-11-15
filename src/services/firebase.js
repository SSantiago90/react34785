import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB3O1pBAvLvUsSSdpMnOtE-QlEVAIqZuJY",
  authDomain: "react34785.firebaseapp.com",
  projectId: "react34785",
  storageBucket: "react34785.appspot.com",
  messagingSenderId: "30677509961",
  appId: "1:30677509961:web:3a16596bece32915989c98",
};

const FirebaseApp = initializeApp(firebaseConfig);

const DB = getFirestore(FirebaseApp);

export function testDatabase() {
  console.log(FirebaseApp);
}

export async function getSingleItemFromAPI(id) {
  // 1. Referenciamos el documento que queremos con su ID y su Colección
  const docRef = doc(DB, "products", id);

  // 2. Obtenemos el snapshot del documento con getDoc(referenciaDoc)
  const docSnap = await getDoc(docRef);

  // 3. Chequeamos si el snapshot existe con snapshot.exists()
  if (docSnap.exists()) {
    // 4. Retornamos los datos
    return {
      ...docSnap.data(),
      id: docSnap.id,
    };
  } else {
    console.error("El producto no existe");
  }
}

// async/await -> try/catch
export async function getItemsFromAPI() {
  try {
    // 1. Necesito conectarme a la colección de "productos" con "collection"
    const collectionProducts = collection(DB, "products");

    // 2. Necesito traer todos los documentos existentes con getDocs
    let respuesta = await getDocs(collectionProducts);

    // 3. Extramos la data de nuestros productos y la mapeamos con "map"
    const products = respuesta.docs.map((docu) => {
      return {
        ...docu.data(),
        id: docu.id,
      };
    });

    // 4. Retornamos el listado de productos mapeado
    return products;
  } catch (error) {
    console.error(error);
  }
}

export async function getItemsFromAPIByCategory(categoryId) {
  const productsRef = collection(DB, "products");
  const myQuery = query(productsRef, where("category", "==", categoryId));

  const productsSnap = await getDocs(myQuery);

  const products = productsSnap.docs.map((docu) => {
    return {
      ...docu.data(),
      id: docu.id,
    };
  });

  return products;
}
