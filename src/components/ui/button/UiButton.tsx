function UiButton({ children, styles =null, ...props  }) {
  return (
    <button {...props} className={`active colorWhite p15 my20 br075rem ${styles}`}>
      {children}
    </button>
  );
}

export { UiButton };
 