import { useEffect, useState } from "react";


interface ResetAlertProps {
    onClose: () => void;
  }

const ResetAlert = ({onClose} : ResetAlertProps) => {

    const [visible, setVisible] = useState(true);

    useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose(); // Llama a la función onClose cuando la alerta desaparezca
    }, 2000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return visible ? (
    <div className="reset-alert">
      <div className="reset-alert-fill">
        <a>ALERT: CAR RESET TO STOCK</a>
      </div>
    </div>
  ) : null;
}

export default ResetAlert