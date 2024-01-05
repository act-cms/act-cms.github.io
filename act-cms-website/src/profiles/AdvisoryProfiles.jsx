import Headshot from '../assets/headshot.svg';

import JayFoley from '../assets/advisory_board/foley_jay.jpg';
import BonnieHall from '../assets/advisory_board/hall_bonnie.jpg';
import GraceStokes from '../assets/advisory_board/stokes_grace.jpg';
import KatsuyoThornton from '../assets/advisory_board/thornton_katsuyo.jpg';

const profiles = [
  { headshot: JayFoley, markdown_file: '/bios/Jay_Foley.md'},
  { headshot: BonnieHall, markdown_file: '/bios/Bonnie_Hall.md'},
  { name: 'Geoff Hutchison', headshot: Headshot, markdown_file: '/bios/Geoff_Hutchison.md' },
  { headshot: GraceStokes, markdown_file: '/bios/Grace_Stokes.md' },
  { headshot: KatsuyoThornton, markdown_file: '/bios/Katsuyo_Thornton.md' },
];

export default profiles;

