'use client';

import React from 'react';
import styles from '../styles/Main.module.css';

type projectProps = {
  projectId: number;
  projectTitle: string;
  purpose: string;
  techUsed: string;
  imageComponent: any;
};

export default function Project({
  projectId,
  projectTitle,
  purpose,
  techUsed,
  imageComponent,
}: projectProps) {
  return (
    <div className={styles.card}>
      {imageComponent}
      <div className={styles.container}>
        <h2>
          <b>
            Project {projectId}: {projectTitle}
          </b>
        </h2>
        <p>
          <strong>Info:</strong> {purpose}
        </p>
        <p>
          <strong>Technologies used:</strong> {techUsed}
        </p>
      </div>
    </div>
  );
}
