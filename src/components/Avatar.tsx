type AvatarProps = {
  name: string;
  img: string;
  isSelected: boolean;
  onClick: () => void;
};

export default function Avatar({ img, isSelected, name, onClick }: AvatarProps) {
  return (
    <div
      className={`avatar ${isSelected ? 'online' : 'offline'} flex flex-col text-center`}
      onClick={onClick}
    >
      <div className="w-24 rounded-full">
        <img src={img} />
      </div>
      <p className="black inline-block">{name}</p>
    </div>
  );
}
