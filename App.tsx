import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

//droppable: 어떤 것을 드롭할 수 있는 영역, draggable: 우리가 드래그 할 수 있는 영역
//--> children 필요, 함수여야만 한다.
function App() {
  const onDragEnd = () => {};
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div>
        <Droppable droppableId="one">
          {(magic) => (
            <ul ref={magic.innerRef} {...magic.droppableProps}>
              <Draggable draggableId="first" index={0}>
                {(magic) => (
                  <li
                    ref={magic.innerRef}
                    {...magic.draggableProps}
                    //{...magic.dragHandleProps}
                    //{...magic.dragHandleProps}에서 li를 움직이는 handle은 어디에서든지 가능(O,n,e 어디를 잡던지)
                    //원한다면 또 다른 handle을 만들어서 One을 움직이기 위해 li를 전체에 클릭 허용이 아니라 움직일 수 있는 특정한 부분을 만들 수 있다.
                  >
                    <span {...magic.dragHandleProps}>🔥</span>
                    One
                  </li>
                )}
              </Draggable>
              <Draggable draggableId="second" index={1}>
                {(magic) => (
                  <li
                    ref={magic.innerRef}
                    {...magic.draggableProps}
                    //{...magic.dragHandleProps}
                  >
                    <span {...magic.dragHandleProps}>🔥</span>
                    Two
                  </li>
                )}
              </Draggable>
            </ul>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
}

export default App;
