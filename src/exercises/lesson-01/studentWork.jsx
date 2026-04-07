//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  //add variables here
  const name = 'Ina';
  const age = 53;
  const hobbies = ['Sewing', 'Cooking', 'Hiking', 'Fishing '];

  return (
    <div>
      {/* add JSX here */}
      <h1>About Me</h1>
      <p>
        Hello! My name is {name}. I am {age} years old.
      </p>
      <h4>My hobbies</h4>
      <ul>
        {hobbies.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}
