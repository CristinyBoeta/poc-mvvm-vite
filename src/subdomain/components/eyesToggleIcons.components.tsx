import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type EyesToggleIconsProps = {
  isVisible: boolean;
  style: string;
  action?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const EyesToggleIcons: React.FC<EyesToggleIconsProps> = ({
  isVisible,
  style,
  action,
}) => {
  return (
    <button className={style} onClick={action}>
      {!isVisible ? (
        <FontAwesomeIcon icon={faEyeSlash} />
      ) : (
        <FontAwesomeIcon icon={faEye} />
      )}
    </button>
  );
};

export default EyesToggleIcons;
