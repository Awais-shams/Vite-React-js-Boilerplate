import PropTypes from 'prop-types';

function LinkButton({ href, icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`flex items-center gap-2 rounded px-4 py-2 text-white
 ${label === 'Github' ? 'bg-gray-800 hover:bg-gray-900' : 'bg-blue-800 hover:bg-blue-900'}`}>
      {icon}
      <span>{label}</span>
    </a>
  );
}

LinkButton.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.element,
};

LinkButton.defaultProps = {
  icon: null,
};

export default LinkButton;
