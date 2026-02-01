import { JSX } from "react";
import Image from "next/image";
import styles from "./skill-badge.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";


/** * A badge to display a skill (inside the card component).
 * @param { string } props.name - The name of the skill.
 * @param { IconProp } [props.fontAwesomeIcon] - Optional. A FontAwesome icon to display alongside the skill name.
 * @param { string } [props.imageUrl] - Optional. An image URL to display alongside the skill name.
 */
export default function SkillBadge(
  {name, fontAwesomeIcon, imageUrl}:
  {name: string, fontAwesomeIcon?: IconProp, imageUrl?: string}
): JSX.Element {

  return (
    <div className={styles.skillBadge}>
      {fontAwesomeIcon &&
        <FontAwesomeIcon icon={fontAwesomeIcon} />
      }
      {imageUrl &&
        <Image
        src={imageUrl}
        alt="" className={styles.skillImage}
        width={10}
        height={10}
        />
      }
      <span className={styles.skillName}>{name}</span>
    </div>
  );

}