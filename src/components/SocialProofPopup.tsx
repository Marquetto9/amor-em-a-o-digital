import { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";

const NAMES = [
  "Lucia M.", "Carlos S.", "Maria F.", "João P.", "Ana R.",
  "Fernanda L.", "Roberto A.", "Patricia C.", "Bruno T.", "Juliana N.",
  "Ricardo B.", "Camila V.", "Eduardo G.", "Larissa D.", "Marcos H.",
  "Beatriz O.", "Gustavo K.", "Isabela Q.", "Thiago E.", "Renata U.",
  "Felipe Z.", "Carolina I.", "André W.", "Vanessa Y.", "Rafael X.",
];

const ACTIONS = [
  "acabou de adquirir o e-book",
  "garantiu o e-book agora há pouco",
  "já está ajudando o Refúgio das Patas",
  "adquiriu o e-book agora há pouco",
];

interface PopupData {
  id: number;
  name: string;
  action: string;
}

const SocialProofPopup = () => {
  const [popup, setPopup] = useState<PopupData | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let showTimeout: ReturnType<typeof setTimeout>;
    let hideTimeout: ReturnType<typeof setTimeout>;
    let nextTimeout: ReturnType<typeof setTimeout>;

    const showPopup = () => {
      const name = NAMES[Math.floor(Math.random() * NAMES.length)];
      const action = ACTIONS[Math.floor(Math.random() * ACTIONS.length)];
      setPopup({ id: Date.now(), name, action });
      setVisible(true);

      // visível 4–6s
      const visibleDuration = 4000 + Math.random() * 2000;
      hideTimeout = setTimeout(() => {
        setVisible(false);
        // remove do DOM após animação de saída
        nextTimeout = setTimeout(() => {
          setPopup(null);
          // próximo em 8–15s
          const nextDelay = 8000 + Math.random() * 7000;
          showTimeout = setTimeout(showPopup, nextDelay);
        }, 400);
      }, visibleDuration);
    };

    // primeiro popup após 5s
    showTimeout = setTimeout(showPopup, 5000);

    return () => {
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
      clearTimeout(nextTimeout);
    };
  }, []);

  if (!popup) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed bottom-4 left-4 z-[60] pointer-events-none max-w-[280px] sm:max-w-xs transition-all duration-400 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="flex items-center gap-3 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-xl shadow-lg px-3 py-2.5 sm:px-4 sm:py-3">
        <CheckCircle2 className="w-6 h-6 sm:w-7 sm:h-7 text-green-500 flex-shrink-0" />
        <p className="text-xs sm:text-sm text-gray-800 leading-snug">
          <span className="font-semibold">{popup.name}</span> {popup.action}
        </p>
      </div>
    </div>
  );
};

export default SocialProofPopup;