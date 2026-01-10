import { Button } from "@/app/ui/button/button";
import styles from "./header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons/faAngleRight";
import useRedirect from "@/app/hooks/use-redirect";

export function ContinueButton() {

  const redirect = useRedirect();

  return (
    <Button
    onClick={ ()=> {
      redirect.scrollTo("projects")
    }}
    >
      <FontAwesomeIcon icon={faAngleRight} />
    </Button>
  );
}

export function ContinueButtonFallback() {
  return (
    <Button disabled>
      <FontAwesomeIcon icon={faAngleRight} />
    </Button>
  );
}