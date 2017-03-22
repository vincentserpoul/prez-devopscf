/**
*
* Presentation
*
*/

import React from 'react';
// import styled from 'styled-components';

// Import Spectacle Core tags
import {
  Link,
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Text,
  Image,
} from 'spectacle';

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader';

// Require CSS
import 'normalize.css';
import 'spectacle/lib/themes/default/index.css';

// Import theme
import createTheme from 'spectacle/lib/themes/default';
// <div>Icons made by <Link textColor="tertiary" target="_blank" href="http://www.flaticon.com/authors/madebyoliver" title="Madebyoliver">Madebyoliver</Link> from <Link textColor="tertiary" target="_blank" href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</Link> is licensed by <Link textColor="tertiary" target="_blank" href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</Link></div>
import cloudGrey from './img/cloudgrey.svg';
import cloudBlue from './img/cloudblue.svg';
import cloudBlack from './img/cloudblack.svg';
import cloudView from './img/cloud view.svg';
import pcfHistory from './img/pcfhistory.png';
import kubo from './img/kubo.png';

preloader({ cloudGrey, cloudBlue, cloudBlack, cloudView, pcfHistory, kubo });

const theme = createTheme({
  primary: 'white',
  secondary: '#1F2022',
  tertiary: '#03A9FC',
  quartenary: '#CECECE',
}, {
  primary: 'Oswald',
  secondary: 'Helvetica',
});

function Presentation() {
  return (
    <Deck transition={['zoom', 'slide']} transitionDuration={500} theme={theme}>
      <Slide transition={['zoom']} bgImage={cloudGrey}>
        <Heading size={1} fit lineHeight={1} textColor="secondary">
            a journey into the cloud
          </Heading>
        <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            from a dev[ops] perspective
        </Text>
      </Slide>
      <Slide transition={['slide', 'fade']} bgImage={cloudBlack}>
        <Image src={pcfHistory} fill display="cover" width="100%" />
      </Slide>
      <Slide transition={['fade']} bgColor="primary" textColor="tertiary" bgImage={cloudBlue}>
        <Image src={cloudView} fill display="cover" width="100%" />
      </Slide>
      <Slide transition={['fade']} bgColor="secondary" textColor="primary" bgImage={cloudGrey}>
        <Heading size={1} fit lineHeight={1}>
            What criterias matters from a dev point of view?
        </Heading>
        <List textColor="primary">
          <ListItem>Light local environment as close to prod as possible</ListItem>
          <ListItem>Large choice of services</ListItem>
          <ListItem>Ease of development</ListItem>
          <ListItem>Speed of build and deployment</ListItem>
        </List>
      </Slide>
      <Slide transition={['zoom', 'fade']} bgColor="tertiary" textColor="primary" bgImage={cloudBlack}>
        <Heading size={1} fit lineHeight={1} textColor="secondary">
            Dev environments
        </Heading>
        <List textColor="primary">
          <ListItem><Link textColor="quartenary" target="_blank" href="https://network.pivotal.io/products/pcfdev">Cloud foundry - PCF dev</Link>: ease of install+, light+</ListItem>
          <ListItem><Link textColor="quartenary" target="_blank" href="https://github.com/openshift/origin">Openshift - Origin</Link>: ease of install++, light(not tried)</ListItem>
          <ListItem><Link textColor="quartenary" target="_blank" href="https://github.com/kubernetes/minikube">Tectonic - Minikube</Link>: ease of install+, light++</ListItem>
          <ListItem><Link textColor="quartenary" target="_blank" href="https://github.com/kubernetes/minikube">Kubernetes - Minikube</Link>: ease of install++, light++</ListItem>
          <ListItem><Link textColor="quartenary" target="_blank" href="https://docs.docker.com/engine/installation/">Docker - swarm</Link>: ease of install+++, light+++</ListItem>
        </List>
      </Slide>
      <Slide transition={['fade', 'slide']} bgColor="secondary" textColor="primary" bgImage={cloudGrey}>
        <Heading size={1} fit lineHeight={1} >
            choice of services
        </Heading>
        <List textColor="primary">
          <ListItem><Link textColor="tertiary" target="_blank" href="https://pivotal.io/fr/platform/services">CF - Marketplace</Link> (stateful)<br />quantity+, security+++, up to date+</ListItem>
          <ListItem><Link textColor="tertiary" target="_blank" href="http://hub.docker.com/">Dockerhub</Link> (stateless - avail to diego)<br />quantity++++, security++, up to date++++</ListItem>
          <ListItem><Link textColor="tertiary" target="_blank" href="http://hub.docker.com/">Dockerhub</Link> (stateful)<br />quantity+++, security++, up to date++++</ListItem>
        </List>
      </Slide>
      <Slide transition={['fade', 'slide']} bgColor="tertiary" textColor="primary" bgImage={cloudBlack}>
        <Heading size={1} fit lineHeight={1} textColor="secondary">
            Ease of development - <Link textColor="quartenary" target="_blank" href="https://12factor.net/">12 factor app</Link>
        </Heading>
        <List textColor="primary">
          <ListItem>CF: <Link textColor="quartenary" target="_blank" href="https://docs.run.pivotal.io/devguide/deploy-apps/environment-variable.html">bound services environment variables, painful to inject with local env</Link></ListItem>
          <ListItem>Kubernetes/swarm based bound services accessed through service name/hostname, easy to develop</ListItem>
        </List>
      </Slide>
      <Slide transition={['fade', 'slide']} bgColor="secondary" textColor="primary" bgImage={cloudBlue}>
        <Heading size={1} fit lineHeight={1}>
            Speed of build and deployment <Link textColor="primary" href="https://github.com/vincentserpoul/gocloud">(demo)</Link>
        </Heading>
        <List textColor="primary">
          <ListItem>Cloud Foundry buildpacks (go 1.8 not available)</ListItem>
          <ListItem>Docker based images (go 1.8 available)</ListItem>
        </List>
      </Slide>
      <Slide transition={['slide', 'fade']} fit bgImage={kubo}>
      </Slide>
    </Deck>
  );
}

export default Presentation;

