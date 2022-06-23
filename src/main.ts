import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import PrimeVue from 'primevue/config';

// Components
import AutoComplete from 'primevue/autocomplete/AutoComplete.vue';
import Accordion from 'primevue/accordion/Accordion.vue';
import AccordionTab from 'primevue/accordiontab/AccordionTab.vue';
import Avatar from 'primevue/avatar/Avatar.vue';
import AvatarGroup from 'primevue/avatargroup/AvatarGroup.vue';
import Badge from 'primevue/badge/Badge.vue';
import BlockUI from 'primevue/blockui/BlockUI.vue';
import Breadcrumb from 'primevue/breadcrumb/Breadcrumb.vue';
import Button from 'primevue/button/Button.vue';
import Calendar from 'primevue/calendar/Calendar.vue';
import Card from 'primevue/card/Card.vue';
import Carousel from 'primevue/carousel/Carousel.vue';
import CascadeSelect from 'primevue/cascadeselect/CascadeSelect.vue';
import Checkbox from 'primevue/checkbox/Checkbox.vue';
import Chip from 'primevue/chip/Chip.vue';
import Chips from 'primevue/chips/Chips.vue';
import ColorPicker from 'primevue/colorpicker/ColorPicker.vue';
import Column from 'primevue/column/Column.vue';
import ColumnGroup from 'primevue/columngroup/ColumnGroup.vue';
import ConfirmDialog from 'primevue/confirmdialog/ConfirmDialog.vue';
import ConfirmPopup from 'primevue/confirmpopup/ConfirmPopup.vue';
import ContextMenu from 'primevue/contextmenu/ContextMenu.vue';
import DataTable from 'primevue/datatable/DataTable.vue';
import DataView from 'primevue/dataview/DataView.vue';
import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions/DataViewLayoutOptions.vue';
import DeferredContent from 'primevue/deferredcontent/DeferredContent.vue';
import Dialog from 'primevue/dialog/Dialog.vue';
import Divider from 'primevue/divider/Divider.vue';
import Dock from 'primevue/dock/Dock.vue';
import Dropdown from 'primevue/dropdown/Dropdown.vue';
import Fieldset from 'primevue/fieldset/Fieldset.vue';
import FileUpload from 'primevue/fileupload/FileUpload.vue';
import Image from 'primevue/image/Image.vue';
import InlineMessage from 'primevue/inlinemessage/InlineMessage.vue';
import Inplace from 'primevue/inplace/Inplace.vue';
import InputMask from 'primevue/inputmask/InputMask.vue';
import InputNumber from 'primevue/inputnumber/InputNumber.vue';
import InputSwitch from 'primevue/inputswitch/InputSwitch.vue';
import InputText from 'primevue/inputtext/InputText.vue';
import Knob from 'primevue/knob/Knob.vue';
import Listbox from 'primevue/listbox/Listbox.vue';
import MegaMenu from 'primevue/megamenu/MegaMenu.vue';
import Menu from 'primevue/menu/Menu.vue';
import Menubar from 'primevue/menubar/Menubar.vue';
import Message from 'primevue/message/Message.vue';
import MultiSelect from 'primevue/multiselect/MultiSelect.vue';
import OrderList from 'primevue/orderlist/OrderList.vue';
import OrganizationChart from 'primevue/organizationchart/OrganizationChart.vue';
import OverlayPanel from 'primevue/overlaypanel/OverlayPanel.vue';
import Paginator from 'primevue/paginator/Paginator.vue';
import Panel from 'primevue/panel/Panel.vue';
import PanelMenu from 'primevue/panelmenu/PanelMenu.vue';
import Password from 'primevue/password/Password.vue';
import PickList from 'primevue/picklist/PickList.vue';
import ProgressBar from 'primevue/progressbar/ProgressBar.vue';
import ProgressSpinner from 'primevue/progressspinner/ProgressSpinner.vue';
import Rating from 'primevue/rating/Rating.vue';
import RadioButton from 'primevue/radiobutton/RadioButton.vue';
import Row from 'primevue/row/Row.vue';
import ScrollPanel from 'primevue/scrollpanel/ScrollPanel.vue';
import ScrollTop from 'primevue/scrolltop/ScrollTop.vue';
import SelectButton from 'primevue/selectbutton/SelectButton.vue';
import Skeleton from 'primevue/skeleton/Skeleton.vue';
import Slider from 'primevue/slider/Slider.vue';
import Sidebar from 'primevue/sidebar/Sidebar.vue';
import SpeedDial from 'primevue/speeddial/SpeedDial.vue';
import SplitButton from 'primevue/splitbutton/SplitButton.vue';
import Splitter from 'primevue/splitter/Splitter.vue';
import SplitterPanel from 'primevue/splitterpanel/SplitterPanel.vue';
import Steps from 'primevue/steps/Steps.vue';
import TabMenu from 'primevue/tabmenu/TabMenu.vue';
import TabView from 'primevue/tabview/TabView.vue';
import TabPanel from 'primevue/tabpanel/TabPanel.vue';
import Tag from 'primevue/tag/Tag.vue';
import Terminal from 'primevue/terminal/Terminal.vue';
import Textarea from 'primevue/textarea/Textarea.vue';
import TieredMenu from 'primevue/tieredmenu/TieredMenu.vue';
import Timeline from 'primevue/timeline/Timeline.vue';
import Tree from 'primevue/tree/Tree.vue';
import TreeTable from 'primevue/treetable/TreeTable.vue';
import Toast from 'primevue/toast/Toast.vue';
import Toolbar from 'primevue/toolbar/Toolbar.vue';
import ToggleButton from 'primevue/togglebutton/ToggleButton.vue';
import TriStateCheckbox from 'primevue/tristatecheckbox/TriStateCheckbox.vue';
import Galleria from 'primevue/galleria/Galleria.vue';

// Services
import ToastService from 'primevue/toastservice';
import ConfirmationService from 'primevue/confirmationservice';

// Styles
import 'primevue/resources/themes/md-dark-indigo/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

createApp(App)
  .use(store)
  .use(router)
  .use(PrimeVue)
  .use(ToastService)
  .use(ConfirmationService)
  .component('InputText', InputText)
  .component('Accordion', Accordion)
  .component('AccordionTab', AccordionTab)
  .component('Avatar', Avatar)
  .component('AvatarGroup', AvatarGroup)
  .component('AutoComplete', AutoComplete)
  .component('Badge', Badge)
  .component('BlockUI', BlockUI)
  .component('Breadcrumb', Breadcrumb)
  .component('Button', Button)
  .component('Calendar', Calendar)
  .component('Card', Card)
  .component('Carousel', Carousel)
  .component('CascadeSelect', CascadeSelect)
  .component('Checkbox', Checkbox)
  .component('Chip', Chip)
  .component('Chips', Chips)
  .component('ColorPicker', ColorPicker)
  .component('Column', Column)
  .component('ColumnGroup', ColumnGroup)
  .component('ConfirmDialog', ConfirmDialog)
  .component('ConfirmPopup', ConfirmPopup)
  .component('ContextMenu', ContextMenu)
  .component('DataTable', DataTable)
  .component('DataView', DataView)
  .component('DataViewLayoutOptions', DataViewLayoutOptions)
  .component('DeferredContent', DeferredContent)
  .component('Dialog', Dialog)
  .component('Divider', Divider)
  .component('Dock', Dock)
  .component('Dropdown', Dropdown)
  .component('Fieldset', Fieldset)
  .component('FileUpload', FileUpload)
  .component('Image', Image)
  .component('InlineMessage', InlineMessage)
  .component('Inplace', Inplace)
  .component('InputMask', InputMask)
  .component('InputNumber', InputNumber)
  .component('InputSwitch', InputSwitch)
  .component('InputText', InputText)
  .component('Knob', Knob)
  .component('Listbox', Listbox)
  .component('MegaMenu', MegaMenu)
  .component('Menu', Menu)
  .component('Menubar', Menubar)
  .component('Message', Message)
  .component('MultiSelect', MultiSelect)
  .component('OrderList', OrderList)
  .component('OrganizationChart', OrganizationChart)
  .component('OverlayPanel', OverlayPanel)
  .component('Paginator', Paginator)
  .component('Panel', Panel)
  .component('PanelMenu', PanelMenu)
  .component('Password', Password)
  .component('PickList', PickList)
  .component('ProgressBar', ProgressBar)
  .component('ProgressSpinner', ProgressSpinner)
  .component('RadioButton', RadioButton)
  .component('Rating', Rating)
  .component('Row', Row)
  .component('ScrollPanel', ScrollPanel)
  .component('ScrollTop', ScrollTop)
  .component('SelectButton', SelectButton)
  .component('Slider', Slider)
  .component('Sidebar', Sidebar)
  .component('Skeleton', Skeleton)
  .component('SpeedDial', SpeedDial)
  .component('SplitButton', SplitButton)
  .component('Splitter', Splitter)
  .component('SplitterPanel', SplitterPanel)
  .component('Steps', Steps)
  .component('TabView', TabView)
  .component('TabPanel', TabPanel)
  .component('TabMenu', TabMenu)
  .component('Tag', Tag)
  .component('Terminal', Terminal)
  .component('Textarea', Textarea)
  .component('TieredMenu', TieredMenu)
  .component('Timeline', Timeline)
  .component('Toast', Toast)
  .component('Toolbar', Toolbar)
  .component('ToggleButton', ToggleButton)
  .component('Tree', Tree)
  .component('TreeTable', TreeTable)
  .component('TriStateCheckbox', TriStateCheckbox)
  .component('Galleria', Galleria)
  .mount('#app');
