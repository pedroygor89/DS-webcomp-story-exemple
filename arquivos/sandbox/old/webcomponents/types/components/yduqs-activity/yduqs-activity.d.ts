import { YduqsActivityModel } from './yduqs-activity.model';
export declare class YduqsActivity {
  el: HTMLElement;
  activity_id: string;
  settings: YduqsActivityModel;
  initialize(config: YduqsActivityModel): Promise<void>;
  private renderActivities;
  render(): any;
}
