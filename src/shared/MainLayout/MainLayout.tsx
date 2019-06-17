import * as React from 'react';
import './styles.scss';

interface Props {
  renderToolbar: () => JSX.Element;
  renderSidebar: () => JSX.Element;
  renderContent: () => JSX.Element;
}

const MainLayout = (props: Props): JSX.Element => {
  const { renderToolbar, renderSidebar, renderContent } = props;

  return (
    <div className="main-layout__main-container">
      <div className="toolbar-container">{renderToolbar()}</div>
      <div className="sidebar-content-container">
        <div className="sidebar-container">{renderSidebar()}</div>
        <div className="content-container">{renderContent()}</div>
      </div>
    </div>
  );
};

export { MainLayout };
