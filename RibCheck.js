import React, { useState } from "react";
import axios from "axios";

function RibCheck() {
  const [rib, setRib] = useState("");
  const [name, setName] = useState("");
  const [result, setResult] = useState(null);

  const handleCheck = async () => {
    if (!rib) {
      alert("Veuillez entrer un RIB.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/verify-rib", {
        rib,
        name,
      });
      setResult(response.data);
    } catch (error) {
      console.error("Erreur lors de la vérification :", error);
      setResult({ error: "Une erreur s'est produite." });
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Nom du titulaire"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="RIB"
        value={rib}
        onChange={(e) => setRib(e.target.value)}
      />
      <button onClick={handleCheck}>Vérifier le RIB</button>
      {result && (
        <div className="result">
          <h4>Résultat :</h4>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default RibCheck;
