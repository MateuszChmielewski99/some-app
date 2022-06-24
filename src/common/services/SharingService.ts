export function handleShare(title: string, content: string, url: string) {
  if (!navigator.share)
    return;
    
  navigator
    .share({
      title: title,
      text: content,
      url: url,
    })
    .then(() => {
      console.log("Successfully shared");
    })
    .catch((error) => {
      console.error("Something went wrong", error);
    });
}