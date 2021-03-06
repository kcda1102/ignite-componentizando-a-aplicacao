import { Button } from "./Button";

interface SideBarProps {
  genres: Array<{
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  }>;
  selectedGenreId: number;
  handleClick: (number: number) => void;
}

export function SideBar(props: SideBarProps) {
  
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
    {props.genres.map(genre => (
      <Button
        key={String(genre.id)}
        title={genre.title}
        iconName={genre.name}
        onClick={() => props.handleClick(genre.id)}
        selected={props.selectedGenreId === genre.id}
      />
    ))}
      </div>
    </nav>
  ) 
}