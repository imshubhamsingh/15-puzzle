export default ({ property = 'all', length = '0.3s', ease = 'ease' }) => `
    transition: ${property} ${length} ${ease};
`;
