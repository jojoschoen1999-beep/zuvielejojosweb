// ─────────────────────────────────────────────────────────────
//  ELEVATOR PITCH CONTENT
//  Edit the text below. Each block is one floor (page).
//  Floor 1 is what people see first when the doors open,
//  the ▲ button rides up to floor 2, 3, ...
//
//  Pictures: drop the file into  public/images/elevator/
//  and write its path, e.g.  image: '/images/elevator/me.jpg'
//  Leave image: '' to show a "picture goes here" placeholder.
// ─────────────────────────────────────────────────────────────

export interface ElevatorFloor {
  heading: string;
  subheading: string;
  text: string;
  image: string;
  imageAlt: string;
}

export const elevatorPitch: ElevatorFloor[] = [
  {
    heading: 'floor one',
    subheading: 'a subheading goes here',
    text: 'A short paragraph about this floor. Write two or three sentences. If it gets longer, visitors can scroll inside the elevator.',
    image: '',
    imageAlt: '',
  },
  {
    heading: 'floor two',
    subheading: 'a subheading goes here',
    text: 'A short paragraph about this floor. Write two or three sentences. If it gets longer, visitors can scroll inside the elevator.',
    image: '',
    imageAlt: '',
  },
  {
    heading: 'floor three',
    subheading: 'a subheading goes here',
    text: 'A short paragraph about this floor. Write two or three sentences. If it gets longer, visitors can scroll inside the elevator.',
    image: '',
    imageAlt: '',
  },
  {
    heading: 'floor four',
    subheading: 'a subheading goes here',
    text: 'A short paragraph about this floor. Write two or three sentences. If it gets longer, visitors can scroll inside the elevator.',
    image: '',
    imageAlt: '',
  },
  {
    heading: 'floor five',
    subheading: 'a subheading goes here',
    text: 'A short paragraph about this floor. Write two or three sentences. If it gets longer, visitors can scroll inside the elevator.',
    image: '',
    imageAlt: '',
  },
  {
    heading: 'floor six',
    subheading: 'a subheading goes here',
    text: 'A short paragraph about this floor. Write two or three sentences. If it gets longer, visitors can scroll inside the elevator.',
    image: '',
    imageAlt: '',
  },
];
