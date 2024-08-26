-- CreateTable
CREATE TABLE "NavItem" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "href" TEXT,
    "disabled" BOOLEAN DEFAULT false,
    "external" BOOLEAN DEFAULT false,
    "icon" TEXT,
    "label" TEXT,
    "description" TEXT,
    "listOrder" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "NavItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NavSubItem" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "href" TEXT,
    "disabled" BOOLEAN DEFAULT false,
    "external" BOOLEAN DEFAULT false,
    "icon" TEXT,
    "label" TEXT,
    "description" TEXT,
    "listOrder" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "parentId" TEXT,

    CONSTRAINT "NavSubItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "NavItem_title_key" ON "NavItem"("title");

-- CreateIndex
CREATE UNIQUE INDEX "NavSubItem_title_key" ON "NavSubItem"("title");

-- AddForeignKey
ALTER TABLE "NavSubItem" ADD CONSTRAINT "NavSubItem_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "NavItem"("id") ON DELETE SET NULL ON UPDATE CASCADE;
