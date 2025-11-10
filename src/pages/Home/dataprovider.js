import PropTypes from "prop-types";
import { useMemo } from "react";
import DataContext from "../../contexts/DataContext";

const DataProviderWrapper = ({ children, data }) => {
  const value = useMemo(
    () => ({
      data: data || { events: [] },
      error: null,
    }),
    [data]
  );

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

DataProviderWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.shape({
    events: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        cover: PropTypes.string,
        date: PropTypes.string,
        label: PropTypes.string,
      })
    ),
  }),
};

DataProviderWrapper.defaultProps = {
  data: { events: [] },
};

export default DataProviderWrapper;
