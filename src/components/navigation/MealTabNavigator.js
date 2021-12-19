import { Navbar, Container, Nav, Image } from "react-bootstrap";
import * as React from 'react';
import { Images } from '../../models/Images'

class MealTabNavigator extends React.Component {
  constructor(props){
    super(props);
    
    this.renderMealTabs = this.renderMealTabs.bind(this);
  }


  toggleNavImages(focused, tabName){
    let target = document.getElementById(`img-${tabName}`);
    switch (tabName) {
      case "Breakfast":
        if(focused){
          target.src = Images.Breakfast.active;
        }else{
          target.src = Images.Breakfast.inactive;
        }
        break;
      case "Lunch":
        if(focused){
          target.src = Images.Lunch.active;
        }else{
          target.src = Images.Lunch.inactive;
        }
        break;
      case "Snack":
        if(focused){
          target.src = Images.Snack.active;
        }else{
          target.src = Images.Snack.inactive;
        }
        break;
      case "Dinner":
        if(focused){
          target.src = Images.Dinner.active;
        }else{
          target.src = Images.Dinner.inactive;
        }
        break;
      case "SetMeal":
        if(focused){
          target.src = Images.SetMeal.active;
        }else{
          target.src = Images.SetMeal.inactive;
        }
        break;
      default:
        break;
    }
  }

  renderMealTabs(selectedKey){
    const navLinks = document.querySelectorAll(".meal-tab");
    document.querySelector(".meal-tab.nav-link.active").classList.remove("active");
    document.querySelector(".meal-tab:active").classList.add("active");
    navLinks.forEach(link => {
      this.toggleNavImages(link.classList.contains("active"), link.getAttribute("data-key"));
    });
  }

  render() {
    return (
      <Navbar expand="lg" fixed="bottom" style={{maxWidth: '80%', padding: '0'}}>
        <Container style={{margin: 0, maxWidth: '100%', padding: '0'}}>
            <Nav
              className="me-auto"
              activeKey="/breakfast"
              onSelect={(selectedKey) => this.renderMealTabs(selectedKey)}
            >
              <Nav.Link href="/breakfast" className="meal-tab" data-key="Breakfast" style={{maxWidth: '22%', position: 'relative', margin: '0 -19px', zIndex: '4'}}>
                <Image src={Images.Breakfast.active} style={{maxWidth: '100%'}} id="img-Breakfast"/>
              </Nav.Link>
              <Nav.Link eventKey="lunch" className="meal-tab" data-key="Lunch" style={{maxWidth: '22%', position: 'relative', margin: '0 -19px', zIndex: '3'}}>
                <Image src={Images.Lunch.inactive} style={{maxWidth: '100%'}} id="img-Lunch"/>
              </Nav.Link>
              <Nav.Link eventKey="snack" className="meal-tab" data-key="Snack" style={{maxWidth: '22%', position: 'relative', margin: '0 -19px', zIndex: '2'}}>
                <Image src={Images.Snack.inactive} style={{maxWidth: '100%',}} id="img-Snack"/>
              </Nav.Link>
              <Nav.Link eventKey="dinner" className="meal-tab" data-key="Dinner" style={{maxWidth: '22%', position: 'relative', margin: '0 -19px', zIndex: '1'}}>
                <Image src={Images.Dinner.inactive} style={{maxWidth: '100%'}} id="img-Dinner"/>
              </Nav.Link>
              <Nav.Link eventKey="custom" className="meal-tab" data-key="SetMeal" style={{maxWidth: '22%', position: 'relative', margin: '0 -19px', zIndex: '0'}}>
                <Image src={Images.SetMeal.inactive} style={{maxWidth: '100%'}} id="img-SetMeal"/>
              </Nav.Link>
            </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default MealTabNavigator;
