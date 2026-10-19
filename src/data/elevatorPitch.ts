// ─────────────────────────────────────────────────────────────
//  ELEVATOR PITCH CONTENT
//
//  While underConstruction is true, the elevator opens on
//  "under construction / come back soon" and the side shows the
//  loading bar. Set it to false once the floors below are ready.
//
//  Each block is one floor. The heading shows inside the elevator;
//  the subheading, text and picture show next to it.
//  Pictures: drop the file into  public/images/elevator/
//  and write its path, e.g.  image: '/images/elevator/me.jpg'
//  Leave image: '' to show a "picture goes here" placeholder.
// ─────────────────────────────────────────────────────────────

export const underConstruction = true;

export interface ElevatorFloor {
  heading: string;
  subheading: string;
  text: string;
  image: string;
  imageAlt: string;
}

const placeholder = 'The longer story for this floor goes here, next to the elevator. A few sentences, with a picture underneath.';

export const elevatorPitch: ElevatorFloor[] = [
  { heading: 'floor one', subheading: 'a subheading goes here', text: placeholder, image: '', imageAlt: '' },
  { heading: 'floor two', subheading: 'a subheading goes here', text: placeholder, image: '', imageAlt: '' },
  { heading: 'floor three', subheading: 'a subheading goes here', text: placeholder, image: '', imageAlt: '' },
  { heading: 'floor four', subheading: 'a subheading goes here', text: placeholder, image: '', imageAlt: '' },
  { heading: 'floor five', subheading: 'a subheading goes here', text: placeholder, image: '', imageAlt: '' },
  { heading: 'floor six', subheading: 'a subheading goes here', text: placeholder, image: '', imageAlt: '' },
];
