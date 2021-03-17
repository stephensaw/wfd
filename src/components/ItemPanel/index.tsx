import React, { forwardRef, PropsWithChildren, RefAttributes, useContext } from 'react';
import styles from "./index.less";
import { Collapse } from "antd";
import 'antd/lib/collapse/style';
import LangContext from "../../util/context";
const { Panel } = Collapse;

const ItemPanel = forwardRef<any, PropsWithChildren<any>>(({ props }, ref) => {
  const { i18n } = useContext(LangContext);
  return (
    <div ref={ref} className={styles.itemPanel}>
      <input type="radio" name="itemPanel-group" className={styles['itemPanel-group-radio']} data-itempanel-group="trigger" id="itemPanel-trigger" defaultChecked />
      <input type="radio" name="itemPanel-group" className={styles['itemPanel-group-radio']} data-itempanel-group="action" id="itemPanel-action" />

      <div className={styles['itemPanel-header-container']}>
        <label htmlFor="itemPanel-trigger" className={styles['itemPanel-group-header']} data-itempanel-group="trigger">
          Triggers
        </label>

        <label htmlFor="itemPanel-action" className={styles['itemPanel-group-header']} data-itempanel-group="action">
          Actions
        </label>
      </div>

      <div className={styles['itemPanel-group-panel']} data-itempanel-group="trigger">
        <Collapse bordered={false} defaultActiveKey={[]}>
          <Panel header={i18n['start']} key="1" forceRender>
            <div className={styles.action} draggable="true" data-item={"{clazz:'start',size:'30*30',label:''}"}>
              <img src={require('../assets/flow/start.svg')} style={{ width: 42, height: 42 }} />
                <div className={styles.actionInfo}>
                  <div className={styles.actionTitle}>{i18n['startEvent']}</div>
                  <div className={styles.actionDescription}>{i18n['startEvent.description']}</div>
                </div>
            </div>
            <div className={styles.action} draggable="true" data-item={"{clazz:'timerStart',size:'30*30',label:''}"}>
              <img src={require('../assets/flow/timer-start.svg')} style={{ width: 42, height: 42 }} />
              <div className={styles.actionInfo}>
                <div className={styles.actionTitle}>{i18n['timerEvent']}</div>
                <div className={styles.actionDescription}>{i18n['timerEvent.description']}</div>
              </div>
            </div>
            <div className={styles.action} draggable="true" data-item={"{clazz:'messageStart',size:'30*30',label:''}"}>
              <img src={require('../assets/flow/message-start.svg')} style={{ width: 42, height: 42 }} />
              <div className={styles.actionInfo}>
                <div className={styles.actionTitle}>{i18n['messageEvent']}</div>
                <div className={styles.actionDescription}>{i18n['messageEvent.description']}</div>
              </div>
            </div>
            <div className={styles.action} draggable="true" data-item={"{clazz:'signalStart',size:'30*30',label:''}"}>
              <img src={require('../assets/flow/signal-start.svg')} style={{ width: 42, height: 42 }} />
              <div className={styles.actionInfo}>
                <div className={styles.actionTitle}>{i18n['signalEvent']}</div>
                <div className={styles.actionDescription}>{i18n['signalEvent.description']}</div>
              </div>
            </div>
          </Panel>

          <Panel header={i18n['task']} key="2" forceRender>
            <div className={styles.action} draggable="true" data-item={"{clazz:'userTask',size:'80*44',label:'" + i18n['userTask'] + "'}"}>
              <img src={require('../assets/flow/user-task.svg')} style={{ width: 80, height: 44 }} />
              <div className={styles.actionInfo}>
                <div className={styles.actionTitle}>{i18n['userTask']}</div>
                <div className={styles.actionDescription}></div>
              </div>
            </div>
            <div className={styles.action} draggable="true" data-item={"{clazz:'scriptTask',size:'80*44',label:'" + i18n['scriptTask'] + "'}"}>
              <img src={require('../assets/flow/script-task.svg')} style={{ width: 80, height: 44 }} />
              <div className={styles.actionInfo}>
                <div className={styles.actionTitle}>{i18n['scriptTask']}</div>
                <div className={styles.actionDescription}></div>
              </div>
            </div>
            <div className={styles.action} draggable="true" data-item={"{clazz:'javaTask',size:'80*44',label:'" + i18n['javaTask'] + "'}"}>
              <img src={require('../assets/flow/java-task.svg')} style={{ width: 80, height: 44 }} />
              <div className={styles.actionInfo}>
                <div className={styles.actionTitle}>{i18n['javaTask']}</div>
                <div className={styles.actionDescription}></div>
              </div>
            </div>
            <div className={styles.action} draggable="true" data-item={"{clazz:'mailTask',size:'80*44',label:'" + i18n['mailTask'] + "'}"}>
              <img src={require('../assets/flow/mail-task.svg')} style={{ width: 80, height: 44 }} />
              <div className={styles.actionInfo}>
                <div className={styles.actionTitle}>{i18n['mailTask']}</div>
                <div className={styles.actionDescription}></div>
              </div>
            </div>
            <div className={styles.action} draggable="true" data-item={"{clazz:'receiveTask',size:'80*44',label:'" + i18n['receiveTask'] + "'}"}>
              <img src={require('../assets/flow/receive-task.svg')} style={{ width: 80, height: 44 }} />
              <div className={styles.actionInfo}>
                <div className={styles.actionTitle}>{i18n['receiveTask']}</div>
                <div className={styles.actionDescription}></div>
              </div>
            </div>
          </Panel>
        </Collapse>
      </div>

      <div className={styles['itemPanel-group-panel']} data-itempanel-group="action">
        <Collapse bordered={false} defaultActiveKey={[]}>
          <Panel header={i18n['gateway']} key="3" forceRender>
            <div className={styles.action} draggable="true" data-item="{clazz:'exclusiveGateway',size:'40*40',label:''}">
              <img src={require('../assets/flow/exclusive-gateway.svg')} style={{ width: 48, height: 48 }} />
              <div className={styles.actionInfo}>
                <div className={styles.actionTitle}>{i18n['exclusiveGateway']}</div>
                <div className={styles.actionDescription}></div>
              </div>
            </div>
            <div className={styles.action} draggable="true" data-item="{clazz:'parallelGateway',size:'40*40',label:''}">
              <img src={require('../assets/flow/parallel-gateway.svg')} style={{ width: 48, height: 48 }} />
              <div className={styles.actionInfo}>
                <div className={styles.actionTitle}>{i18n['parallelGateway']}</div>
                <div className={styles.actionDescription}></div>
              </div>
            </div>
            <div className={styles.action} draggable="true" data-item="{clazz:'inclusiveGateway',size:'40*40',label:''}">
              <img src={require('../assets/flow/inclusive-gateway.svg')} style={{ width: 48, height: 48 }} />
              <div className={styles.actionInfo}>
                <div className={styles.actionTitle}>{i18n['inclusiveGateway']}</div>
                <div className={styles.actionDescription}></div>
              </div>
            </div>
          </Panel>
          <Panel header={i18n['catch']} key="4" forceRender>
            <div className={styles.action} draggable="true" data-item={"{clazz:'timerCatch',size:'50*30',label:''}"}>
              <img src={require('../assets/flow/timer-catch.svg')} style={{ width: 58, height: 38 }} />
              <div className={styles.actionInfo}>
                <div className={styles.actionTitle}>{i18n['timerEvent']}</div>
                <div className={styles.actionDescription}></div>
              </div>
            </div>
            <div className={styles.action} draggable="true" data-item={"{clazz:'messageCatch',size:'50*30',label:''}"}>
              <img src={require('../assets/flow/message-catch.svg')} style={{ width: 58, height: 38 }} />
              <div className={styles.actionInfo}>
                <div className={styles.actionTitle}>{i18n['messageEvent']}</div>
                <div className={styles.actionDescription}></div>
              </div>
            </div>
            <div className={styles.action} draggable="true" data-item={"{clazz:'signalCatch',size:'50*30',label:''}"}>
              <img src={require('../assets/flow/signal-catch.svg')} style={{ width: 58, height: 38 }} />
              <div className={styles.actionInfo}>
                <div className={styles.actionTitle}>{i18n['signalEvent']}</div>
                <div className={styles.actionDescription}></div>
              </div>
            </div>
          </Panel>
          <Panel header={i18n['end']} key="5" forceRender>
            <div className={styles.action} draggable="true" data-item={"{clazz:'end',size:'30*30',label:''}"}>
              <img src={require('../assets/flow/end.svg')} style={{ width: 42, height: 42 }} />
              <div className={styles.actionInfo}>
                <div className={styles.actionTitle}>{i18n['endEvent']}</div>
                <div className={styles.actionDescription}></div>
              </div>
            </div>
          </Panel>
        </Collapse>
      </div>
    </div>
  )
});

export default ItemPanel;
