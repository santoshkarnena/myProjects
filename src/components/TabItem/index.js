import './index.css'

const TabItem = props => {
  const {tabDetails, updateTabId, selectedTab} = props
  const {displayText, tabId} = tabDetails
  const isSelectedTab = selectedTab === tabId
  const selectedClass = isSelectedTab ? 'active-tab-btn' : ''
  const updateID = () => {
    updateTabId(tabId)
  }
  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${selectedClass}`}
        onClick={updateID}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
