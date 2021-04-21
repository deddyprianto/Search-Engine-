function Avatar({ url, className }) {
  return (
    <img
      src={url}
      className={`h-10 rounded-full cursor-pointer duration-150 transform hover:scale-110 ${className}`}
      loading="lazy"
      alt="profilePic"
    />
  );
}

export default Avatar;
