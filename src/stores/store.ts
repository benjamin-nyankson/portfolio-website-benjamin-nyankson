import { defineStore } from "pinia";

export const useAlertSystem = defineStore({
  id: "alert",
  state: () => ({
    message: "",
    open: false,
    severity: "info" as "error" | "success" | "info"
  }),
  actions: {
    setAlert(alert: [string, "info" | "error" | "success"]) {
      this.open = true;
      this.message = alert[0].length > 100 ? "Contact for support" : alert[0];
      this.severity = alert[1];
    }
  }
});