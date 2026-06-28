export function markTopicCompleted(chapterId, topicId) {

    const key = `chapter_${chapterId}`;

    const completed = JSON.parse(
        localStorage.getItem(key) || "[]"
    );

    if (!completed.includes(Number(topicId))) {

        completed.push(Number(topicId));

        localStorage.setItem(
            key,
            JSON.stringify(completed)
        );

    }

}

export function getCompletedTopics(chapterId) {

    return JSON.parse(
        localStorage.getItem(
            `chapter_${chapterId}`
        ) || "[]"
    );

}

export function getChapterProgress(chapterId,totalTopics){

    const completed=getCompletedTopics(chapterId);

    return Math.round(
        (completed.length/totalTopics)*100
    );

}

export function getOverallProgress(chapters) {

    let totalTopics = 0;
    let completedTopics = 0;

    chapters.forEach(chapter => {

        totalTopics += chapter.topics;

        const completed = getCompletedTopics(chapter.id);

        completedTopics += completed.length;

    });

    return Math.round(
        (completedTopics / totalTopics) * 100
    );

}