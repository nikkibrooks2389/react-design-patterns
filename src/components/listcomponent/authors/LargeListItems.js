export const LargeAuthorListItem = ({ author }) => {
  const { name, age, country, books } = author;

  const containerStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    margin: '16px 0',
    backgroundColor: '#f9f9f9',
  };

  const headingStyle = {
    color: '#333',
  };

  const paragraphStyle = {
    margin: '8px 0',
    color: '#666',
  };

  const listStyle = {
    listStyleType: 'square',
    paddingLeft: '20px',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>{name}</h2>
      <p style={paragraphStyle}>Age: {age}</p>
      <p style={paragraphStyle}>Country: {country}</p>
      <h2 style={headingStyle}>Books</h2>
      <ul style={listStyle}>
        {books.map((book) => (
          <li key={book}>{book}</li>
        ))}
      </ul>
    </div>
  );
};