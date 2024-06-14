import Toast from "@vuesimple/vs-toast";

export function showToast(title, message, success) {
  console.log("success", success);
  Toast.show({
    title,
    message,
    variant: success ? "success" : "error",
    position: "top-center",
  });
}
