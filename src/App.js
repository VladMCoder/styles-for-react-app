import { IconDown } from "./icon-set";
import {
  ButtonHover1,
  ButtonHover2,
  ButtonHover3,
  ButtonHover3Container,
  ButtonHover3Icon,
  ListItem,
} from "./styles.styled";

export const App = () => {
  return (
    <>
      <div>
        <ul>
          <ListItem>
            <ButtonHover1>Click Me</ButtonHover1>
          </ListItem>
          <ListItem>
            <ButtonHover2>Click Me</ButtonHover2>
          </ListItem>
          <ListItem>
            <ButtonHover3Container>
              <ButtonHover3>Click Me</ButtonHover3>
              <ButtonHover3Icon>
                <IconDown />
              </ButtonHover3Icon>
            </ButtonHover3Container>
          </ListItem>
        </ul>
      </div>
    </>
  );
};
