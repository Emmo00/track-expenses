import Toast from "@vuesimple/vs-toast";

export function showToast(title, message, success) {
  Toast.show({
    title,
    message,
    variant: success ? "success" : "error",
    position: "top-center",
  });
}
