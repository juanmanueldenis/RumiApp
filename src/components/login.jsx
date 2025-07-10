import { useState } from "react";
import { auth } from "../firebase";
import {
  GoogleAuthProvider,
  signInWithPopup,
  RecaptchaVerifier,
  signInWithPhoneNumber
} from "firebase/auth";

export default function Login() {
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [confirm, setConfirm] = useState(null);

  // Login con Google
  const handleGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      alert("¡Login exitoso!");
      window.location.href = "/"; // Redirigí a home
    } catch (error) {
      alert(error.message);
    }
  };

  // Login con Celular
  const handlePhone = async () => {
    try {
      window.recaptchaVerifier = new RecaptchaVerifier(
        'recaptcha-container',
        { size: "invisible" },
        auth
      );
      const appVerifier = window.recaptchaVerifier;
      const confirmationResult = await signInWithPhoneNumber(auth, phone, appVerifier);
      setConfirm(confirmationResult);
      alert("Código enviado por SMS");
    } catch (error) {
      alert(error.message);
    }
  };

  // Verificar código SMS
  const handleVerify = async () => {
    try {
      await confirm.confirm(code);
      alert("¡Login exitoso!");
      window.location.href = "/";
    } catch (error) {
      alert("Código incorrecto");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#d0cae8]">
      <div className="bg-white shadow-2xl rounded-3xl px-8 py-10 flex flex-col gap-6 items-center w-full max-w-md">
        <h2 className="text-2xl font-bold text-[#6c63ff]">Ingresar o Registrarse</h2>
        <button
          className="w-full bg-[#6c63ff] text-white rounded-2xl px-6 py-3 font-semibold text-lg shadow hover:bg-[#574fba] transition"
          onClick={handleGoogle}
        >
          Ingresar con Google
        </button>

        <div className="w-full flex flex-col gap-2">
          <input
            className="rounded-xl border px-4 py-2 w-full"
            placeholder="Celular (ej: +5491134567890)"
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />
          <div id="recaptcha-container"></div>
          {confirm && (
            <>
              <input
                className="rounded-xl border px-4 py-2 w-full"
                placeholder="Código SMS"
                value={code}
                onChange={e => setCode(e.target.value)}
              />
              <button
                className="w-full bg-[#96e6b3] text-[#332e35] rounded-2xl px-6 py-3 font-semibold text-lg shadow hover:bg-[#79d8a1] transition"
                onClick={handleVerify}
              >
                Verificar Código
              </button>
            </>
          )}
          {!confirm && (
            <button
              className="w-full bg-[#ffd6e0] text-[#332e35] rounded-2xl px-6 py-3 font-semibold text-lg shadow hover:bg-[#ffb6c1] transition"
              onClick={handlePhone}
            >
              Ingresar con Celular
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
