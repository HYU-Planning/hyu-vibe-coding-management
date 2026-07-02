import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: '체계적인 커리큘럼',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        바이브 코딩 방법론의 핵심 개념부터 실습까지 단계별로 정리된 자료를
        제공합니다.
      </>
    ),
  },
  {
    title: '실습 중심 학습',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        실제 사례와 예제를 통해 바이브 코딩을 업무와 학습에 바로 적용할 수
        있도록 돕습니다.
      </>
    ),
  },
  {
    title: '지속적으로 업데이트',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        GitHub 저장소를 통해 자료가 계속 보완되며, 누구나 개선에 기여할 수
        있습니다.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
