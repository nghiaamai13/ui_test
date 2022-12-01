const LeftButton = ({ Icon, text, active }) => {
  return (
    <div className="flex cursor-pointer items-center space-x-4 rounded-full p-4 hover:bg-shadowHoverLight dark:hover:bg-shadowHoverDark">
      <Icon className="btn-side" />
      <p
        className={`hidden text-[17px] text-black dark:text-white lg:inline ${
          active ? "text-[20px] font-bold" : "font-semibold"
        }`}
      >
        {text}
      </p>
    </div>
  );
};

export default LeftButton;
