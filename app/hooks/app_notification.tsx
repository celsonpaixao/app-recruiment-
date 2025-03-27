import { useState, useCallback } from "react";
import GlobalPopup from "../pages/global_popup";

type NotificationType = "alert" | "success" | "error";

export const useAppNotification = () => {
  const [visible, setVisible] = useState(false);
  const [notification, setNotification] = useState<{
    title: string;
    description: string;
    type: NotificationType;
  } | null>(null);

  const showNotification = useCallback(
    (title: string, description: string, type: NotificationType) => {
      console.log("🔔 Notificação chamada:", { title, description, type });

      setNotification({ title, description, type });
      setVisible(true);

      setTimeout(() => setVisible(false), 3000);
    },
    []
  );

  const hideNotification = () => {
    setVisible(false);
  };

  const NotificationComponent = () => (
    <>
      {visible && notification ? (
        <GlobalPopup
          visible={visible}
          onClose={hideNotification}
          title={notification.title}
          description={notification.description}
          type={notification.type}
        />
      ) : null}
    </>
  );

  return { showNotification, NotificationComponent };
};
